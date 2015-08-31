package br.com.arizona.go.repository;
import org.ektorp.CouchDbConnector;
import org.ektorp.support.CouchDbRepositorySupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import br.com.arizona.go.model.Function;

@Component
public class FunctionRepository extends CouchDbRepositorySupport<Function> {

	@Autowired
	protected FunctionRepository(@Qualifier("functionDatabase") CouchDbConnector db) {
		super(Function.class, db);
	}
}
