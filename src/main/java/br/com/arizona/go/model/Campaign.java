package br.com.arizona.go.model;
import java.util.Set;

import org.ektorp.support.CouchDbDocument;


public class Campaign extends CouchDbDocument {
	private static final long serialVersionUID = -7110250085916653787L;

	private String status;
	private Object history;
	private Object files;
	private Set<Job> jobs;
	private String costumer;
	private Object notifications;
	private String createdAt;
	private String name;
	private String agency;
	private String agencyId;
	private String userName;
	private String annotations;
	private String type;
	private String timeFrame;
	private String jobNum;

	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Object getHistory() {
		return history;
	}
	public void setHistory(Object history) {
		this.history = history;
	}
	public Object getFiles() {
		return files;
	}
	public void setFiles(Object files) {
		this.files = files;
	}
	public String getCostumer() {
		return costumer;
	}
	public void setCostumer(String costumer) {
		this.costumer = costumer;
	}
	public Object getNotifications() {
		return notifications;
	}
	public void setNotifications(Object notifications) {
		this.notifications = notifications;
	}
	public String getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAgency() {
		return agency;
	}
	public void setAgency(String agency) {
		this.agency = agency;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
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
	public String getTimeFrame() {
		return timeFrame;
	}
	public void setTimeFrame(String timeFrame) {
		this.timeFrame = timeFrame;
	}
	public String getJobNum() {
		return jobNum;
	}
	public void setJobNum(String jobNum) {
		this.jobNum = jobNum;
	}
	public Set<Job> getJobs() {
		return jobs;
	}
	public void setJobs(Set<Job> jobs) {
		this.jobs = jobs;
	}
	public String getAgencyId() {
		return agencyId;
	}
	public void setAgencyId(String agencyId) {
		this.agencyId = agencyId;
	}
}
