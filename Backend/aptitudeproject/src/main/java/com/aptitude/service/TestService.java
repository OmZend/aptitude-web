package com.aptitude.service;

import com.aptitude.entity.Test;
import com.aptitude.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    public Test saveTest(Test test) {
        return testRepository.save(test);
    }

    public List<Test> getAllTests() {
        return testRepository.findAll();
    }

    public Optional<Test> getTestById(int testId) {
        return testRepository.findById(testId);
    }
    public Test updateTest(int id, Test updatedTest) {
        return testRepository.findById(id).map(test -> {
            test.setTestName(updatedTest.getTestName());
            test.setTotalQuestions(updatedTest.getTotalQuestions());
            test.setTimeLimit(updatedTest.getTimeLimit());
            test.setCreatedBy(updatedTest.getCreatedBy());
            return testRepository.save(test);
        }).orElse(null);
    }
    public void deleteTest(int testId) {
        testRepository.deleteById(testId);
    }
}
