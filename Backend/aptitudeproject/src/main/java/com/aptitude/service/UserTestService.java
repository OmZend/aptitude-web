package com.aptitude.service;

import com.aptitude.entity.UserTest;
import com.aptitude.repository.UserTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserTestService {

    @Autowired
    private UserTestRepository userTestRepository;

    public UserTest saveUserTest(UserTest userTest) {
        return userTestRepository.save(userTest);
    }

    public List<UserTest> getAllUserTests() {
        return userTestRepository.findAll();
    }

    public Optional<UserTest> getUserTestById(long attemptId) {
        return userTestRepository.findById(attemptId);
    }
    public UserTest updateUserTest(long id, UserTest updatedUserTest) {
        return userTestRepository.findById(id).map(userTest -> {
            userTest.setScore(updatedUserTest.getScore());
            userTest.setAccuracy(updatedUserTest.getAccuracy());
            userTest.setStatus(updatedUserTest.getStatus());
            return userTestRepository.save(userTest);
        }).orElse(null);
    }
    
    public void deleteUserTest(long attemptId) {
        userTestRepository.deleteById(attemptId);
    }
}
