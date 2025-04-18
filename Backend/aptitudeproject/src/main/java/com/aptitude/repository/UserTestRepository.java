package com.aptitude.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aptitude.entity.UserTest;

@Repository
public interface UserTestRepository extends JpaRepository<UserTest, Long> {}

