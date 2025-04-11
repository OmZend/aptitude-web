package com.aptitude.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "performance_tracking")
public class PerformanceTracking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tracking_id")
    private long trackingId;

	@OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

    @Column(name = "category_id", nullable = false)
    private long categoryId;

    @Column(name = "total_attempts", nullable = false)
    private long totalAttempts = 0;

    @Column(name = "total_correct", nullable = false)
    private int totalCorrect = 0;

    @Column(name = "accuracy", precision = 5)
    private Double accuracy;
    
    @UpdateTimestamp
    @Column(name = "last_attempted")
    private LocalDateTime lastAttempted;

    public PerformanceTracking() {
    }

	public PerformanceTracking(long trackingId, User userId, long categoryId, long totalAttempts, int totalCorrect,
			Double accuracy, LocalDateTime lastAttempted) {
		this.trackingId = trackingId;
		this.userId = userId;
		this.categoryId = categoryId;
		this.totalAttempts = totalAttempts;
		this.totalCorrect = totalCorrect;
		this.accuracy = accuracy;
		this.lastAttempted = lastAttempted;
	}

	public long getTrackingId() {
		return trackingId;
	}

	public void setTrackingId(long trackingId) {
		this.trackingId = trackingId;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(long categoryId) {
		this.categoryId = categoryId;
	}

	public long getTotalAttempts() {
		return totalAttempts;
	}

	public void setTotalAttempts(long totalAttempts) {
		this.totalAttempts = totalAttempts;
	}

	public int getTotalCorrect() {
		return totalCorrect;
	}

	public void setTotalCorrect(int totalCorrect) {
		this.totalCorrect = totalCorrect;
	}

	public Double getAccuracy() {
		return accuracy;
	}

	public void setAccuracy(Double accuracy) {
		this.accuracy = accuracy;
	}

	public LocalDateTime getLastAttempted() {
		return lastAttempted;
	}

	public void setLastAttempted(LocalDateTime lastAttempted) {
		this.lastAttempted = lastAttempted;
	}

	@Override
	public String toString() {
		return "PerformanceTracking [trackingId=" + trackingId + ", userId=" + userId + ", categoryId=" + categoryId
				+ ", totalAttempts=" + totalAttempts + ", totalCorrect=" + totalCorrect + ", accuracy=" + accuracy
				+ ", lastAttempted=" + lastAttempted + "]";
	}
}
