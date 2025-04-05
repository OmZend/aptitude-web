package com.aptitude.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;

@Entity
public class UserAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answerId;

    private int attemptedId; // Foreign key referencing user_tests(attempt_id)
    private int questionId; // Foreign key referencing questions(question_id)

    @Enumerated(EnumType.STRING)
    private Option selectedOption;

    private Boolean isCorrect;
    
    @UpdateTimestamp
    @Column(name = "answered_at")
    private LocalDateTime answeredAt;

    public enum Option {
        A, B, C, D
    }

    public UserAnswer() {
    }

    public UserAnswer(int answerId, int attemptedId, int questionId, Option selectedOption, Boolean isCorrect,
            LocalDateTime answeredAt) {
        this.answerId = answerId;
        this.attemptedId = attemptedId;
        this.questionId = questionId;
        this.selectedOption = selectedOption;
        this.isCorrect = isCorrect;
        this.answeredAt = answeredAt;
    }

    // getters and setters

    public int getAnswerId() {
        return answerId;
    }

    public void setAnswerId(int answerId) {
        this.answerId = answerId;
    }

    public int getAttemptedId() {
        return attemptedId;
    }

    public void setAttemptedId(int attemptedId) {
        this.attemptedId = attemptedId;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public Option getSelectedOption() {
        return selectedOption;
    }

    public void setSelectedOption(Option selectedOption) {
        this.selectedOption = selectedOption;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }

    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
    }

    public LocalDateTime getAnsweredAt() {
        return answeredAt;
    }

    public void setAnsweredAt(LocalDateTime answeredAt) {
        this.answeredAt = answeredAt;
    }

    @Override
    public String toString() {
        return "UserAnswers [answerId=" + answerId + ", attemptedId=" + attemptedId + ", questionId=" + questionId
                + ", selectedOption=" + selectedOption + ", isCorrect=" + isCorrect + ", answeredAt=" + answeredAt
                + "]";
    }
}
