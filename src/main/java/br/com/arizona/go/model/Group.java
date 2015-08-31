package br.com.arizona.go.model;
import java.util.Set;

import org.ektorp.support.CouchDbDocument;


public class Group extends CouchDbDocument {
	private static final long serialVersionUID = -7110250085916653787L;

	private String type;
	private String name;
	private Set<String> functions;

	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<String> getFunctions() {
		return functions;
	}
	public void setFunctions(Set<String> functions) {
		this.functions = functions;
	}
}
