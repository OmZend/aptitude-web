package com.aptitude.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.aptitude.entity.Question;
@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>{
    // List<Question> findByCategoryId_Id(Long categoryId);
    List<Question> findByCategoryId_CategoryId(Long categoryId);
    @Query(value = "SELECT * FROM questions WHERE category_id = :categoryId ORDER BY RAND() LIMIT 10", nativeQuery = true)
    List<Question> findRandom10QuestionsByCategory(@Param("categoryId") Long categoryId);
}
