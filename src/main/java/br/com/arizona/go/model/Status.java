package br.com.arizona.go.model;
import java.util.Set;

import org.ektorp.support.CouchDbDocument;


public class Status extends CouchDbDocument {
	private static final long serialVersionUID = -7110250085916653787L;

	private String nome;
	private Set<String> actions;
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Set<String> getActions() {
		return actions;
	}

	public void setActions(Set<String> actions) {
		this.actions = actions;
	}

}
