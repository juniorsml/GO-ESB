package br.com.arizona.go.repository;
import org.ektorp.CouchDbConnector;
import org.ektorp.support.CouchDbRepositorySupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import br.com.arizona.go.model.Campaign;

@Component
public class CampaignRepository extends CouchDbRepositorySupport<Campaign> {

	@Autowired
	protected CampaignRepository(@Qualifier("campaignDatabase") CouchDbConnector db) {
		super(Campaign.class, db);
	}
}
