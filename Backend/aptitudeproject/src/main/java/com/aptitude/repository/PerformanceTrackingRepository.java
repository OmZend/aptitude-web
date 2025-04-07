package com.aptitude.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aptitude.entity.PerformanceTracking;

@Repository
public interface PerformanceTrackingRepository extends JpaRepository<PerformanceTracking, Integer>{

}
