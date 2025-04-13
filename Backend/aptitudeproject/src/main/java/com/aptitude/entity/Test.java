package com.aptitude.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long testId;
    
    @Column(name = "test_name", nullable = false)
    private String testName;
    
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
    @Column(name = "total_questions", columnDefinition = "INT DEFAULT 10")
    private int totalQuestions=10;
    
    @Column(name = "time_limit", columnDefinition = "INT DEFAULT 30")
    private int timeLimit=30;
    
    @ManyToOne
    @JoinColumn(name = "created_by", nullable = false)
    private User createdBy;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public Test() {
    }

	public Test(long testId, String testName, Category category, int totalQuestions, int timeLimit, User createdBy,
			LocalDateTime createdAt) {
		super();
		this.testId = testId;
		this.testName = testName;
		this.category = category;
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
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

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
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
		return "Test [testId=" + testId + ", testName=" + testName + ", category=" + category + ", totalQuestions="
				+ totalQuestions + ", timeLimit=" + timeLimit + ", createdBy=" + createdBy + ", createdAt=" + createdAt
				+ "]";
	}

	   
}
