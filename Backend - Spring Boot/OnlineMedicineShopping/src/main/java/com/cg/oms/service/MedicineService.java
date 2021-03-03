package com.cg.oms.service;

import java.util.List;

import com.cg.oms.exception.MedicineNotFoundException;
import com.cg.oms.vo.MedicineVo;

/**
 * 
 * @author Saranish
 *
 */
public interface MedicineService
{
	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public List<MedicineVo> getAllMedicine();;

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public MedicineVo getMedicineById(Long id) throws MedicineNotFoundException;

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public MedicineVo getMedicineByName(String name) throws MedicineNotFoundException;

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public MedicineVo getMedicineByManufacturerName(String name) throws MedicineNotFoundException;

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public String saveMedicine(MedicineVo medicineVo);

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public String updateMedicine(Long id, MedicineVo newMedicine) throws MedicineNotFoundException;

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public String deleteMedicine(Long id) throws MedicineNotFoundException;

}
