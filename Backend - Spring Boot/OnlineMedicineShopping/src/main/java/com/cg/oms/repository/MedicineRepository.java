package com.cg.oms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.oms.model.Medicine;

/**
 * Medicine Repository interface extends
 * {@link org.springframework.data.jpa.repository.JpaRepository}.
 * 
 * @author Arivazhagan
 */

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long>
{
	public Optional<Medicine> findByMedicineName(String medName);

	public Optional<Medicine> findByMedicineManufacturerName(String medName);
}
