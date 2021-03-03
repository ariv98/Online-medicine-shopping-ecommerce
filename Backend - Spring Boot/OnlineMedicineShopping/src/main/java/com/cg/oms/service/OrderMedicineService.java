package com.cg.oms.service;

import java.util.List;

import com.cg.oms.exception.OrderNotFoundException;
import com.cg.oms.vo.OrderMedicineVo;

/**
 * 
 * @author Srivatsan
 *
 */
public interface OrderMedicineService
{
	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public List<OrderMedicineVo> getAllOrderMedicine();

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public OrderMedicineVo getOrderMedicineById(Long id) throws OrderNotFoundException;

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public String saveOrderMedicine(OrderMedicineVo vo);

}
