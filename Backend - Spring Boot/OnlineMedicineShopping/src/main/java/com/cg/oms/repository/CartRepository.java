package com.cg.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.oms.model.Cart;

/**
 * Cart Repository interface extends
 * {@link org.springframework.data.jpa.repository.JpaRepository}.
 * 
 * @author Arivazhagan
 */


public interface CartRepository extends JpaRepository<Cart, Long>
{

}
