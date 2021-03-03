package com.cg.oms.converter;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.cg.oms.model.OrderMedicine;
import com.cg.oms.vo.OrderMedicineVo;




/**
 * This function is used to convert the orderMedicine object to the orderMedicineVo Object and vise versa
 * this is used for getting and returning the object for security purpose.
 * @author Inam - PC
 *
 */

@Component
public class OrderMedicineConverter
{
	
	/**
	 *  This method converts model object to value object
	 * @param orderMedicine
	 * @return
	 */

	public OrderMedicineVo modelToVo(OrderMedicine orderMedicine)
	{
		OrderMedicineVo orderMedicineVo = new OrderMedicineVo();
		orderMedicineVo.setMedicineList(orderMedicine.getMedicineList());
		orderMedicineVo.setOrder(orderMedicine.getOrder());
		orderMedicineVo.setOrderMedicineId(orderMedicine.getOrderMedicineId());
		orderMedicineVo.setPrice(orderMedicine.getPrice());
		orderMedicineVo.setQuantity(orderMedicine.getQuantity());
		return orderMedicineVo;
	}

	
	/**
	 * This method converts model object to value object
	 * @param orderMedicine
	 * @return
	 */
	
	public List<OrderMedicineVo> modelToVo(List<OrderMedicine> orderMedicine)
	{
		return orderMedicine.stream().map(x -> modelToVo(x)).collect(Collectors.toList());
	}
	
	
	/**
	 * This method converts value object to model object
	 * @param orderMedicineVo
	 * @return
	 */

	public OrderMedicine voToModel(OrderMedicineVo orderMedicineVo)
	{
		OrderMedicine orderMedicine = new OrderMedicine();
		orderMedicine.setMedicineList(orderMedicineVo.getMedicineList());
		orderMedicine.setOrder(orderMedicineVo.getOrder());
		orderMedicine.setOrderMedicineId(orderMedicineVo.getOrderMedicineId());
		orderMedicine.setPrice(orderMedicineVo.getPrice());
		orderMedicine.setQuantity(orderMedicineVo.getQuantity());
		return orderMedicine;
	}
	
	
	/**
	 * This method converts value object to model object
	 * @param orderMedicineVo
	 * @return
	 */

	public List<OrderMedicine> voToModel(List<OrderMedicineVo> orderMedicineVo)
	{
		return orderMedicineVo.stream().map(x -> voToModel(x)).collect(Collectors.toList());
	}

}
