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
	private long attemptId;

	private long userId;
	private long testId;
	private double score;
	@Column(name = "accuracy", precision = 5)
	private double accuracy;
	private String status;

	@UpdateTimestamp
	@Column(name = "attempted_at")
	private LocalDateTime attemptedAt;

	public UserTest() {
	}

	public UserTest(long attemptId, long userId, long testId, double score, double accuracy, String status,
			LocalDateTime attemptedAt) {
		super();
		this.attemptId = attemptId;
		this.userId = userId;
		this.testId = testId;
		this.score = score;
		this.accuracy = accuracy;
		this.status = status;
		this.attemptedAt = attemptedAt;
	}

	public long getAttemptId() {
		return attemptId;
	}

	public void setAttemptId(long attemptId) {
		this.attemptId = attemptId;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public long getTestId() {
		return testId;
	}

	public void setTestId(long testId) {
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
