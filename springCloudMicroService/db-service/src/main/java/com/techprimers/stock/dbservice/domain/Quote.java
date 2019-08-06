package com.techprimers.stock.dbservice.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="quotes")
public class Quote {

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="user_name")
	private String userName;
	
	private String quote;
	

	public Quote() {
		
	}


	public Quote(String userName, String quote) {
		this.userName = userName;
		this.quote = quote;
	}


	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	public String getQuote() {
		return quote;
	}



	public void setQuote(String quote) {
		this.quote = quote;
	}



	@Override
	public String toString() {
		return "Quote [id=" + id + ", userName=" + userName + ", quote=" + quote + "]";
	}
	
	
}
