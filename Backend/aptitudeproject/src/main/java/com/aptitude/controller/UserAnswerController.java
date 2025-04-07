package com.aptitude.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.aptitude.entity.UserAnswer;
import com.aptitude.service.UserAnswerService;

@RestController
@RequestMapping("/api/user-answers")
public class UserAnswerController {

    @Autowired
    private UserAnswerService userAnswerService;

    @PostMapping("/create")
    public UserAnswer createUserAnswer(@RequestBody UserAnswer userAnswer) {
        return userAnswerService.saveUserAnswer(userAnswer);
    }

    @GetMapping("/find/{id}")
    public Optional<UserAnswer> getUserAnswerById(@PathVariable long id) {
        return userAnswerService.getUserAnswerById(id);
    }

    @GetMapping("/getAll")
    public List<UserAnswer> getAllUserAnswers() {
        return userAnswerService.getAllUserAnswers();
    }

    @PutMapping("/update/{id}")
    public UserAnswer updateUserAnswer(@PathVariable long id, @RequestBody UserAnswer userAnswer) {
        return userAnswerService.updateUserAnswer(id, userAnswer);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUserAnswer(@PathVariable long id) {
        userAnswerService.deleteUserAnswer(id);
    }
}
