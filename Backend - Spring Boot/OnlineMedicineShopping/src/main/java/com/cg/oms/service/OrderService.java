package com.cg.oms.service;

import com.cg.oms.exception.OrderNotFoundException;
import com.cg.oms.vo.OrderVo;

/**
 * 
 * @author Mohammed Inamul Haasan
 *
 */
public interface OrderService
{
	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public OrderVo getOrderById(Long id) throws OrderNotFoundException;

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public String placeOrder(OrderVo orderVo);

	/**
	 * Method to be override by the implementing class
	 * 
	 */
	public String cancelOrder(Long id) throws OrderNotFoundException;

}
