package com.aptitude.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long testId;
    
    private String testName;
    
    private long categoryId;
    
    private int totalQuestions;
    
    @Column(name = "time_limit")
    private int timeLimit;
    
    @Column(name = "created_by")
    private int createdBy;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public Test() {
    }

	public Test(long testId, String testName, long categoryId, int totalQuestions, int timeLimit, int createdBy,
			LocalDateTime createdAt) {
		super();
		this.testId = testId;
		this.testName = testName;
		this.categoryId = categoryId;
		this.totalQuestions = totalQuestions;
		this.timeLimit = timeLimit;
		this.createdBy = createdBy;
		this.createdAt = createdAt;
	}

	public long getTestId() {
		return testId;
	}

	public void setTestId(long testId) {
		this.testId = testId;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(long categoryId) {
		this.categoryId = categoryId;
	}

	public int getTotalQuestions() {
		return totalQuestions;
	}

	public void setTotalQuestions(int totalQuestions) {
		this.totalQuestions = totalQuestions;
	}

	public int getTimeLimit() {
		return timeLimit;
	}

	public void setTimeLimit(int timeLimit) {
		this.timeLimit = timeLimit;
	}

	public int getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(int createdBy) {
		this.createdBy = createdBy;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	@Override
	public String toString() {
		return "Test [testId=" + testId + ", testName=" + testName + ", categoryId=" + categoryId + ", totalQuestions="
				+ totalQuestions + ", timeLimit=" + timeLimit + ", createdBy=" + createdBy + ", createdAt=" + createdAt
				+ "]";
	}   
}
