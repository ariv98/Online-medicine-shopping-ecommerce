package com.cg.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.oms.model.User;

/**
 * User Repository interface extends
 * {@link org.springframework.data.jpa.repository.JpaRepository}.
 * 
 * @author Arivazhagan
 * 
 */
public interface UserRepository extends JpaRepository<User, Long>
{
	public User findUserByEmailId(String emailId);
}
