package com.aptitude.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	@ManyToOne
	@JoinColumn(name = "attempt_id", nullable = false)
	private UserTest userTest; // Foreign key referencing user_tests(attempt_id)
	@ManyToOne
	@JoinColumn(name = "question_id", nullable = false)
	private Question question;// Foreign key referencing questions(question_id)

	@Enumerated(EnumType.STRING)
	private Option selectedOption;

	@Column(name = "is_correct")
	private Boolean isCorrect;

	@UpdateTimestamp
	@Column(name = "answered_at")
	private LocalDateTime answeredAt;

	public enum Option {
		A, B, C, D
	}

	public UserAnswer() {
	}

	public UserAnswer(long answerId, UserTest userTest, Question question, Option selectedOption, Boolean isCorrect,
			LocalDateTime answeredAt) {
		super();
		this.answerId = answerId;
		this.userTest = userTest;
		this.question = question;
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

	public UserTest getUserTest() {
		return userTest;
	}

	public void setUserTest(UserTest userTest) {
		this.userTest = userTest;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
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
		return "UserAnswer [answerId=" + answerId + ", userTest=" + userTest + ", question=" + question
				+ ", selectedOption=" + selectedOption + ", isCorrect=" + isCorrect + ", answeredAt=" + answeredAt
				+ "]";
	}
	
}
