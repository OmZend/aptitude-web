package com.aptitude.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.aptitude.entity.Test;
import com.aptitude.service.TestService;

@RestController
@RequestMapping("/api/tests")
public class TestController {

    @Autowired
    private TestService testService;

    @PostMapping("/create")
    public Test createTest(@RequestBody Test test) {
        return testService.saveTest(test);
    }

    @GetMapping("/find/{id}")
    public Optional<Test> getTestById(@PathVariable long id) {
        return testService.getTestById(id);
    }

    @GetMapping("/getAll")
    public List<Test> getAllTests() {
        return testService.getAllTests();
    }

    @PutMapping("/update/{id}")
    public Test updateTest(@PathVariable long id, @RequestBody Test test) {
        return testService.updateTest(id, test);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTest(@PathVariable long id) {
        testService.deleteTest(id);
    }
}
