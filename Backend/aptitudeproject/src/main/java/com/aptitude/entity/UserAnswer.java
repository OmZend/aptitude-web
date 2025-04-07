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
    private long answerId;

    private long attemptedId; // Foreign key referencing user_tests(attempt_id)
    private long questionId; // Foreign key referencing questions(question_id)

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

	public UserAnswer(long answerId, long attemptedId, long questionId, Option selectedOption, Boolean isCorrect,
			LocalDateTime answeredAt) {
		super();
		this.answerId = answerId;
		this.attemptedId = attemptedId;
		this.questionId = questionId;
		this.selectedOption = selectedOption;
		this.isCorrect = isCorrect;
		this.answeredAt = answeredAt;
	}

	public long getAnswerId() {
		return answerId;
	}

	public void setAnswerId(long answerId) {
		this.answerId = answerId;
	}

	public long getAttemptedId() {
		return attemptedId;
	}

	public void setAttemptedId(long attemptedId) {
		this.attemptedId = attemptedId;
	}

	public long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(long questionId) {
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
		return "UserAnswer [answerId=" + answerId + ", attemptedId=" + attemptedId + ", questionId=" + questionId
				+ ", selectedOption=" + selectedOption + ", isCorrect=" + isCorrect + ", answeredAt=" + answeredAt
				+ "]";
	}
}
