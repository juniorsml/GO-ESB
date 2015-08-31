package br.com.arizona.go.model;
import java.util.Set;

import org.ektorp.support.CouchDbDocument;


public class StatusModel extends CouchDbDocument {
	private static final long serialVersionUID = -7110250085916653787L;

	private String model;
	private String type;
	private Set<Status> status;
	
	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Set<Status> getStatus() {
		return status;
	}

	public Status getStatusByName(String name) {
		for (Status status : getStatus()) {
			if (status.getNome().equals(name)) return status;
		}
		return null;
	}
	
	public void setStatus(Set<Status> status) {
		this.status = status;
	}
}
