package com.aptitude.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

@Entity
public class UserTest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int attemptId;

	private int userId;
	private int testId;
	private double score;
	private double accuracy;
	private String status;
	
	@UpdateTimestamp
	@Column(name = "attempted_at")
	private LocalDateTime attemptedAt;

	public UserTest() {
	}

	public UserTest(int attemptId, int userId, int testId, double score, double accuracy, String status,
			LocalDateTime attemptedAt) {
		this.attemptId = attemptId;
		this.userId = userId;
		this.testId = testId;
		this.score = score;
		this.accuracy = accuracy;
		this.status = status;
		this.attemptedAt = attemptedAt;
	}

	public int getAttemptId() {
		return attemptId;
	}

	public void setAttemptId(int attemptId) {
		this.attemptId = attemptId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getTestId() {
		return testId;
	}

	public void setTestId(int testId) {
		this.testId = testId;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	public double getAccuracy() {
		return accuracy;
	}

	public void setAccuracy(double accuracy) {
		this.accuracy = accuracy;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDateTime getAttemptedAt() {
		return attemptedAt;
	}

	public void setAttemptedAt(LocalDateTime attemptedAt) {
		this.attemptedAt = attemptedAt;
	}

	@Override
	public String toString() {
		return "UserTest [attemptId=" + attemptId + ", userId=" + userId + ", testId=" + testId + ", score=" + score
				+ ", accuracy=" + accuracy + ", status=" + status + ", attemptedAt=" + attemptedAt + "]";
	}
}
