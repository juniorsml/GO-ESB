package br.com.arizona.custom_authentication_provider;

import java.util.List;

import org.mule.api.MuleEventContext;
import org.mule.api.lifecycle.Callable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.arizona.go.model.User;
import br.com.arizona.go.repository.UserRepository;

@Component
public class UserController implements Callable  {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Object onCall(MuleEventContext eventContext) throws Exception {

		String userName = eventContext.getMessage().getInvocationProperty("username");
		
		userRepository.initStandardDesignDocument();
        List<User> userList = userRepository.findByLogin(userName);
        if (userList.isEmpty()) return null;
        
        User user = userList.get(0);
    	user.setPassword("");
    	return user;
	}
	
    public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

}