package com.aptitude.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "questions")
public class Questions {

    @Id
    @Column(name = "question_id")
    private int questionId;

    @Column(name = "category_id", nullable = false)
    private int categoryId;

    @Column(name = "question_text", nullable = false, length = 1000)
    private String questionText;

    @Column(name = "option_a", nullable = false)
    private String optionA;

    @Column(name = "option_b", nullable = false)
    private String optionB;

    @Column(name = "option_c", nullable = false)
    private String optionC;

    @Column(name = "option_d", nullable = false)
    private String optionD;

    @Column(name = "correct_option", nullable = false)
    private String correctOption;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public Questions() {
        
    }

    public Questions(int questionId, int categoryId, String questionText, String optionA, String optionB,
                     String optionC, String optionD, String correctOption, LocalDateTime createdAt) {
        this.questionId = questionId;
        this.categoryId = categoryId;
        this.questionText = questionText;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.correctOption = correctOption;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String getOptionA() {
        return optionA;
    }

    public void setOptionA(String optionA) {
        this.optionA = optionA;
    }

    public String getOptionB() {
        return optionB;
    }

    public void setOptionB(String optionB) {
        this.optionB = optionB;
    }

    public String getOptionC() {
        return optionC;
    }

    public void setOptionC(String optionC) {
        this.optionC = optionC;
    }

    public String getOptionD() {
        return optionD;
    }

    public void setOptionD(String optionD) {
        this.optionD = optionD;
    }

    public String getCorrectOption() {
        return correctOption;
    }

    public void setCorrectOption(String correctOption) {
        this.correctOption = correctOption;
    }

//    public LocalDateTime getCreatedAt() {
//        return createdAt;
//    }
//
//    public void setCreatedAt(LocalDateTime createdAt) {
//        this.createdAt = createdAt;
//    }

    @Override
    public String toString() {
        return "Questions [questionId=" + questionId + ", categoryId=" + categoryId + ", questionText=" + questionText
                + ", optionA=" + optionA + ", optionB=" + optionB + ", optionC=" + optionC + ", optionD=" + optionD
                + ", correctOption=" + correctOption + ", createdAt=" + createdAt + "]";
    }
}
