package br.com.arizona.go.model;
import java.util.Set;


public class Job {

	private String id;
	private String status;
	private Set<Advertisement> advertisements;
	private String formato;
	private String annotations;
	private String type;
	private String baseFile;	

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getFormato() {
		return formato;
	}

	public void setFormato(String formato) {
		this.formato = formato;
	}

	public String getAnnotations() {
		return annotations;
	}

	public void setAnnotations(String annotations) {
		this.annotations = annotations;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBaseFile() {
		return baseFile;
	}

	public void setBaseFile(String baseFile) {
		this.baseFile = baseFile;
	}

	public void setAdvertisements(Set<Advertisement> advertisements) {
		this.advertisements = advertisements;
	}

	public Set<Advertisement> getAdvertisements() {
		return advertisements;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
