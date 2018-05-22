package com.practice.dto;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class UserDto implements Serializable {

	private String firstName;
	private String gender;
	private String email;
	private String country;
	private String password;
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
	private Date dob;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	@Override
	public String toString() {
		return "UserDto [firstName=" + firstName + ", gender=" + gender + ", email=" + email + ", country=" + country
				+ ", password=" + password + ", dob=" + dob + "]";
	}

}
