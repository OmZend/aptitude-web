package com.aptitude.service;

import com.aptitude.entity.PerformanceTracking;
import com.aptitude.repository.PerformanceTrackingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PerformanceTrackingService {

    @Autowired
    private PerformanceTrackingRepository performanceTrackingRepository;

    public PerformanceTracking saveTracking(PerformanceTracking tracking) {
        return performanceTrackingRepository.save(tracking);
    }

    public List<PerformanceTracking> getAllTrackings() {
        return performanceTrackingRepository.findAll();
    }

    public Optional<PerformanceTracking> getTrackingById(long trackingId) {
        return performanceTrackingRepository.findById(trackingId);
    }
    public PerformanceTracking updateTracking(long id, PerformanceTracking updatedTracking) {
        return performanceTrackingRepository.findById(id).map(tracking -> {
            tracking.setTotalAttempts(updatedTracking.getTotalAttempts());
            tracking.setTotalCorrect(updatedTracking.getTotalCorrect());
            return performanceTrackingRepository.save(tracking);
        }).orElse(null);
    }

    public void deleteTracking(long trackingId) {
        performanceTrackingRepository.deleteById(trackingId);
    }
}
