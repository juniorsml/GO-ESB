package br.com.arizona.go.model;
import org.ektorp.support.CouchDbDocument;


public class Function extends CouchDbDocument {
	private static final long serialVersionUID = -7110250085916653787L;

	private String label;
	private String url;
	private String method;
	
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}
	
}
