package com.cg.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.oms.model.OrderMedicine;

/**
 * Order Repository interface extends
 * {@link org.springframework.data.jpa.repository.JpaRepository}.
 * 
 * @author Arivazhagan
 */

@Repository
public interface OrderMedicineRepository extends JpaRepository<OrderMedicine, Long>
{

}