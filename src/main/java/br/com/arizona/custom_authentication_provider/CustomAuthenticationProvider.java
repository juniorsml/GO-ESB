package br.com.arizona.custom_authentication_provider;

import java.util.HashSet;
import java.util.Set;

import org.mule.RequestContext;
import org.mule.api.MuleMessage;
import org.mule.module.http.internal.ParameterMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import br.com.arizona.go.model.Advertisement;
import br.com.arizona.go.model.Campaign;
import br.com.arizona.go.model.Function;
import br.com.arizona.go.model.Group;
import br.com.arizona.go.model.Job;
import br.com.arizona.go.model.Status;
import br.com.arizona.go.model.StatusModel;
import br.com.arizona.go.model.User;
import br.com.arizona.go.repository.CampaignRepository;
import br.com.arizona.go.repository.FunctionRepository;
import br.com.arizona.go.repository.GroupRepository;
import br.com.arizona.go.repository.StatusModelRepository;
import br.com.arizona.go.repository.UserRepository;


@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private GroupRepository groupRepository;
	
	@Autowired
	private FunctionRepository functionRepository;
	
	@Autowired
	private CampaignRepository campaignRepository;
	
	@Autowired
	private StatusModelRepository statusModelRepository;
	
	@Override
	@SuppressWarnings("deprecation")
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String username = authentication.getName();
		String password = authentication.getCredentials().toString();

		MuleMessage message = RequestContext.getEventContext().getMessage();
		String requestPath = (String)message.getInboundProperty("http.request.path");
		message.setInvocationProperty("username", username);
		Authentication auth = new UsernamePasswordAuthenticationToken(username, password);

		User user = userRepository.findByLogin(username).get(0);
		if (!user.getLogin().equals(username) || !user.getPassword().equals(password)) return null;

		if (requestPath.equals("/api/login")) return auth;

		ParameterMap queryParams = (ParameterMap)message.getInboundProperty("http.query.params");
		String agencyId = queryParams.get("agencyId");
		String profile = queryParams.get("profile");
		
		if (!user.getAgencyId().equals(agencyId) || !user.getProfile().equals(profile)) return null;
		
		Group group = groupRepository.get(user.getGroupId());
		if (!achouUrl(requestPath, group.getFunctions())) return null;

		Set<Function> userFunctions = new HashSet<Function>();
		for(String functionId : group.getFunctions()){
			Function function = functionRepository.get(functionId);
			userFunctions.add(function);
		}
		message.setInvocationProperty("userFunctions", userFunctions);
		
		if (requestPath.indexOf("/campaigns/") > 0) {
			String campaignId = getModelId(requestPath, "/campaigns/");
			Campaign campaign = campaignRepository.get(campaignId);
			
			StatusModel statusModelCampaign = statusModelRepository.findByModel("campaign").get(0);
			System.out.println(statusModelCampaign.getModel() + " MDEL");
			Status statusCampaign = statusModelCampaign.getStatusByName(campaign.getStatus());
			
			if (!achouUrl(requestPath, statusCampaign.getActions())) return null;

			if (requestPath.indexOf("/jobs/") > 0) {
				String jobId = getModelId(requestPath, "/jobs/");
				Set<Job> listJob = campaign.getJobs();
				Job job = null;
				for (Job jobA : listJob) {
					if (jobId.equals(jobA.getId())) {
						job = jobA; 
					}
				}
				if  (job == null) return null;
			
				StatusModel statusModelJob = statusModelRepository.findByModel("job").get(0);
				Status statusJob = statusModelJob.getStatusByName(job.getStatus());

				if (!achouUrl(requestPath, statusJob.getActions())) return null;

				if (requestPath.indexOf("/ads/") > 0) {
					String advertisementId = getModelId(requestPath, "/ads/");
					Set<Advertisement> listAdvertisement = job.getAdvertisements();
					Advertisement advertisement = null;
					for (Advertisement advertisementA : listAdvertisement) {
						if (advertisementId.equals(advertisement.getId())) {
							advertisement = advertisementA; 
						}
					}
					if  (advertisement == null) return null;
					
					StatusModel statusModelAdvertisement = statusModelRepository.findByModel("advertisement").get(0);
					Status statusAdvertisement = statusModelAdvertisement.getStatusByName(advertisement.getStatus());
					
					if (!achouUrl(requestPath, statusAdvertisement.getActions())) return null;
				}
			}
		}
		return auth;
	}

	private boolean achouUrl(String url, Set<String> functions) {
		String campaignId = getModelId(url, "/campaigns/");
		String jobId = getModelId(url, "/jobs/");
		String advertisementId = getModelId(url, "/ads/");
		
		if (!campaignId.isEmpty()) url = url.replace(campaignId, "{campaignId}");
		if (!jobId.isEmpty()) url = url.replace(jobId, "{jobId}");
		if (!advertisementId.isEmpty())url = url.replace(advertisementId, "{adId}");
		
		for (String functionId : functions) {
			Function function = functionRepository.get(functionId);
			if (url.equals(function.getUrl())) return true;
		}
		return false;
	}

	private String getModelId(String requestPath, String model) {
		int indexModel = requestPath.indexOf(model);
		if (indexModel < 0) return "";
		
		String id = requestPath.subSequence(indexModel + model.length(), requestPath.length()).toString();
		
		if (id.indexOf("/") > 0) {
			id = id.subSequence(0, id.indexOf("/")).toString();
		}
		return id;
	}

	@Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

    public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
}