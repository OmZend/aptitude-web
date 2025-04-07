package com.aptitude.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.aptitude.entity.UserTest;
import com.aptitude.service.UserTestService;

@RestController
@RequestMapping("/api/user-tests")
public class UserTestController {

    @Autowired
    private UserTestService userTestService;

    @PostMapping("/create")
    public UserTest createUserTest(@RequestBody UserTest userTest) {
        return userTestService.saveUserTest(userTest);
    }

    @GetMapping("/find/{id}")
    public Optional<UserTest> getUserTestById(@PathVariable long id) {
        return userTestService.getUserTestById(id);
    }

    @GetMapping("/getAll")
    public List<UserTest> getAllUserTests() {
        return userTestService.getAllUserTests();
    }

    @PutMapping("/update/{id}")
    public UserTest updateUserTest(@PathVariable long id, @RequestBody UserTest userTest) {
        return userTestService.updateUserTest(id, userTest);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUserTest(@PathVariable long id) {
        userTestService.deleteUserTest(id);
    }
}
