package com.aptitude.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

@Entity
public class UserTest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long attemptId;

	@ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "test_id", nullable = false)
    private Test test;
	private double score;
	@Column(name = "accuracy", precision = 5)
	private double accuracy;
	private String status;

	@UpdateTimestamp
	@Column(name = "attempted_at")
	private LocalDateTime attemptedAt;

	public UserTest() {
	}

	public UserTest(long attemptId, User user, Test test, double score, double accuracy, String status,
			LocalDateTime attemptedAt) {
		super();
		this.attemptId = attemptId;
		this.user = user;
		this.test = test;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Test getTest() {
		return test;
	}

	public void setTest(Test test) {
		this.test = test;
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
		return "UserTest [attemptId=" + attemptId + ", user=" + user + ", test=" + test + ", score=" + score
				+ ", accuracy=" + accuracy + ", status=" + status + ", attemptedAt=" + attemptedAt + "]";
	}


}
