package com.cg.oms.repository;



/**
 * User Repository interface extends
 * {@link org.springframework.data.jpa.repository.JpaRepository}.
 * 
 * @author Arivazhagan
 * 
 */

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.oms.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{
	
	}
