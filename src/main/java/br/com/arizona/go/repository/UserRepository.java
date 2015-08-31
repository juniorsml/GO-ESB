package br.com.arizona.go.repository;

import java.util.List;

import org.ektorp.CouchDbConnector;
import org.ektorp.ViewQuery;
import org.ektorp.support.CouchDbRepositorySupport;
import org.ektorp.support.GenerateView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import br.com.arizona.go.model.User;

@Component
public class UserRepository extends CouchDbRepositorySupport<User> {

	@Autowired
	protected UserRepository(@Qualifier("users") CouchDbConnector db) {
		super(User.class, db);
	}

	@GenerateView
	public List<User> findByLogin(String login) {
		this.initStandardDesignDocument();
		return queryView("by_login", login);
	}
}
