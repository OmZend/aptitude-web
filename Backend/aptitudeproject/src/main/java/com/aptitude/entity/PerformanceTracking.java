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
    private int trackingId;

    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "category_id", nullable = false)
    private int categoryId;

    @Column(name = "total_attempts", nullable = false)
    private int totalAttempts = 0;

    @Column(name = "total_correct", nullable = false)
    private int totalCorrect = 0;

    @Column(name = "accuracy", precision = 5, scale = 2)
    private Double accuracy;
    
    @UpdateTimestamp
    @Column(name = "last_attempted")
    private LocalDateTime lastAttempted;

    public PerformanceTracking() {
    }

    public PerformanceTracking(int trackingId, int userId, int categoryId, int totalAttempts,
                                int totalCorrect, Double accuracy, LocalDateTime lastAttempted) {
        this.trackingId = trackingId;
        this.userId = userId;
        this.categoryId = categoryId;
        this.totalAttempts = totalAttempts;
        this.totalCorrect = totalCorrect;
        this.accuracy = accuracy;
        this.lastAttempted = lastAttempted;
    }

    public int getTrackingId() {
        return trackingId;
    }

    public void setTrackingId(int trackingId) {
        this.trackingId = trackingId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getTotalAttempts() {
        return totalAttempts;
    }

    public void setTotalAttempts(int totalAttempts) {
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

//    public LocalDateTime getLastAttempted() {
//        return lastAttempted;
//    }
//
//    public void setLastAttempted(LocalDateTime lastAttempted) {
//        this.lastAttempted = lastAttempted;
//    }

    @Override
    public String toString() {
        return "PerformanceTracking [trackingId=" + trackingId + ", userId=" + userId + ", categoryId=" + categoryId
                + ", totalAttempts=" + totalAttempts + ", totalCorrect=" + totalCorrect + ", accuracy=" + accuracy
                + ", lastAttempted=" + lastAttempted + "]";
    }
}
