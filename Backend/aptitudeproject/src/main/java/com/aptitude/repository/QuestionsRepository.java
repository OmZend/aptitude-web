package com.aptitude.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aptitude.entity.Questions;
@Repository
public interface QuestionsRepository extends JpaRepository<Questions, Integer>{

}
