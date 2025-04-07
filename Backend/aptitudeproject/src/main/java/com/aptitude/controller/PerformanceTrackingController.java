package com.aptitude.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.aptitude.entity.PerformanceTracking;
import com.aptitude.service.PerformanceTrackingService;

@RestController
@RequestMapping("/api/performance-tracking")
public class PerformanceTrackingController {

    @Autowired
    private PerformanceTrackingService performanceTrackingService;

    @PostMapping("/create")
    public PerformanceTracking createTracking(@RequestBody PerformanceTracking tracking) {
        return performanceTrackingService.saveTracking(tracking);
    }

    @GetMapping("/find/{id}")
    public Optional<PerformanceTracking> getTrackingById(@PathVariable long id) {
        return performanceTrackingService.getTrackingById(id);
    }

    @GetMapping("/getAll")
    public List<PerformanceTracking> getAllTrackings() {
        return performanceTrackingService.getAllTrackings();
    }

    @PutMapping("/update/{id}")
    public PerformanceTracking updateTracking(@PathVariable long id, @RequestBody PerformanceTracking tracking) {
        return performanceTrackingService.updateTracking(id, tracking);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTracking(@PathVariable long id) {
        performanceTrackingService.deleteTracking(id);
    }
}
