package com.aptitude.service;

import com.aptitude.entity.Question;
import com.aptitude.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Optional<Question> getQuestionById(long questionId) {
        return questionRepository.findById(questionId);
    }

    public List<Question> getQuestionsByCategory(Long categoryId) {
        return questionRepository.findByCategoryId_CategoryId(categoryId);
    }

    public Question updateQuestion(long id, Question updatedQuestion) {
        return questionRepository.findById(id).map(question -> {
            question.setQuestionText(updatedQuestion.getQuestionText());
            question.setOptionA(updatedQuestion.getOptionA());
            question.setOptionB(updatedQuestion.getOptionB());
            question.setOptionC(updatedQuestion.getOptionC());
            question.setOptionD(updatedQuestion.getOptionD());
            question.setCorrectOption(updatedQuestion.getCorrectOption());
            return questionRepository.save(question);
        }).orElse(null);
    }
    public void deleteQuestion(long questionId) {
        questionRepository.deleteById(questionId);
    }
    
    public List<Question> getRandom10QuestionsByCategory(Long categoryId) {
        return questionRepository.findRandom10QuestionsByCategory(categoryId);
    }
    public List<Question> getQuickTestQuestions() {
        List<Question> quickTestQuestions = new ArrayList<>();
        
        // Get 10 random questions from each category (1-6)
        for (long categoryId = 1; categoryId <= 6; categoryId++) {
            List<Question> categoryQuestions = getRandom10QuestionsByCategory(categoryId);
            quickTestQuestions.addAll(categoryQuestions);
        }
        
        // Shuffle all questions
        Collections.shuffle(quickTestQuestions);
        
        return quickTestQuestions;
    }
}
