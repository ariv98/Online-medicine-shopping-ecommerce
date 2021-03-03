package com.cg.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.oms.model.Role;

/**
 * Role Repository interface extends
 * {@link org.springframework.data.jpa.repository.JpaRepository}.
 * 
 * @author Arivazhagan
 */

public interface RoleRepository extends JpaRepository<Role, Long>
{

}
