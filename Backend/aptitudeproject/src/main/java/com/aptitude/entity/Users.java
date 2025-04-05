package com.aptitude.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Users {
	@Id
	private int userid;
	private String name;
	private String email;
	private String password;
	private String role;
	private Date createdAt;

	public Users() {
		super();
	}

	public Users(int userid, String name, String email, String password, String role, Date createdAt) {
		super();
		this.userid = userid;
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.createdAt = createdAt;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	@Override
	public String toString() {
		return "Users [userid=" + userid + ", name=" + name + ", email=" + email + ", role=" + role + ", createdAt="
				+ createdAt + "]";
	}
}
