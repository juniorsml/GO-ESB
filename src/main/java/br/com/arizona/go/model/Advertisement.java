package br.com.arizona.go.model;


public class Advertisement {

	private String id;
	private String status;
	private String dateDelivery;
	private Object dispatch;
	private Object file;
	private Object checkin;
	private String datePublication;
	private Object channel;
	private String ap;
	private Object solicitations;
	private String type;
	private String agencyId;
	
	
	

	   public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDateDelivery() {
		return dateDelivery;
	}

	public void setDateDelivery(String dateDelivery) {
		this.dateDelivery = dateDelivery;
	}

	public Object getFile() {
		return file;
	}

	public void setFile(Object file) {
		this.file = file;
	}

	public Object getCheckin() {
		return checkin;
	}

	public void setCheckin(Object checkin) {
		this.checkin = checkin;
	}

	public String getDatePublication() {
		return datePublication;
	}

	public void setDatePublication(String datePublication) {
		this.datePublication = datePublication;
	}

	public Object getChannel() {
		return channel;
	}

	public void setChannel(Object channel) {
		this.channel = channel;
	}

	public String getAp() {
		return ap;
	}

	public void setAp(String ap) {
		this.ap = ap;
	}

	public Object getSolicitations() {
		return solicitations;
	}

	public void setSolicitations(Object solicitations) {
		this.solicitations = solicitations;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Object getDispatch() {
		return dispatch;
	}

	public void setDispatch(Object dispatch) {
		this.dispatch = dispatch;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAgencyId() {
		return agencyId;
	}

	public void setAgencyId(String agencyId) {
		this.agencyId = agencyId;
	}

}
