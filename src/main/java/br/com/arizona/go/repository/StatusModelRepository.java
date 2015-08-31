package br.com.arizona.go.repository;
import java.util.List;

import org.ektorp.CouchDbConnector;
import org.ektorp.support.CouchDbRepositorySupport;
import org.ektorp.support.GenerateView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import br.com.arizona.go.model.StatusModel;

@Component
public class StatusModelRepository extends CouchDbRepositorySupport<StatusModel> {

	@Autowired
	protected StatusModelRepository(@Qualifier("statusModelDatabase") CouchDbConnector db) {
		super(StatusModel.class, db);
	}

	@GenerateView
	public List<StatusModel> findByModel(String model) {
		this.initStandardDesignDocument();
		return queryView("by_model", model);
	}
}