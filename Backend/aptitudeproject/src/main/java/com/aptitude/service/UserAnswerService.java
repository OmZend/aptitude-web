package com.aptitude.service;

import com.aptitude.entity.UserAnswer;
import com.aptitude.repository.UserAnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserAnswerService {

    @Autowired
    private UserAnswerRepository userAnswerRepository;

    public UserAnswer saveUserAnswer(UserAnswer userAnswer) {
        return userAnswerRepository.save(userAnswer);
    }

    public List<UserAnswer> getAllUserAnswers() {
        return userAnswerRepository.findAll();
    }

    public Optional<UserAnswer> getUserAnswerById(long answerId) {
        return userAnswerRepository.findById(answerId);
    }
    public UserAnswer updateUserAnswer(long id, UserAnswer updatedUserAnswer) {
        return userAnswerRepository.findById(id).map(userAnswer -> {
            userAnswer.setSelectedOption(updatedUserAnswer.getSelectedOption());
            userAnswer.setIsCorrect(updatedUserAnswer.getIsCorrect());
            return userAnswerRepository.save(userAnswer);
        }).orElse(null);
    }
    public void deleteUserAnswer(long answerId) {
        userAnswerRepository.deleteById(answerId);
    }
}
