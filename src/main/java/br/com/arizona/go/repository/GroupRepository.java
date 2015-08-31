package br.com.arizona.go.repository;
import org.ektorp.CouchDbConnector;
import org.ektorp.support.CouchDbRepositorySupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import br.com.arizona.go.model.Group;

@Component
public class GroupRepository extends CouchDbRepositorySupport<Group> {

	@Autowired
	protected GroupRepository(@Qualifier("groupDatabase") CouchDbConnector db) {
		super(Group.class, db);
	}
}
