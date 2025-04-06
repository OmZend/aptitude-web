package com.aptitude.service;

import com.aptitude.entity.Question;
import com.aptitude.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    public Optional<Question> getQuestionById(int questionId) {
        return questionRepository.findById(questionId);
    }

    public Question updateQuestion(int id, Question updatedQuestion) {
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
    public void deleteQuestion(int questionId) {
        questionRepository.deleteById(questionId);
    }
}
