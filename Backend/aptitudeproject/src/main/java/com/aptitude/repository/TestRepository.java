package com.aptitude.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aptitude.entity.Test;
@Repository
public interface TestRepository extends JpaRepository<Test, Integer>{

}
