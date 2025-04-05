package com.aptitude.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Categories {
	@Id
	private int categoryId;
	private String categoryName;
	private String desciption;

	public Categories(int categoryId, String categoryName, String desciption) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.desciption = desciption;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getDesciption() {
		return desciption;
	}

	public void setDesciption(String desciption) {
		this.desciption = desciption;
	}
}
