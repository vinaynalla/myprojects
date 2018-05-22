package com.practice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.data.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	User findUserByEmail(String email);

}
