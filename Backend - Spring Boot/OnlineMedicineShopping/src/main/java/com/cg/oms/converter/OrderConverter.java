package com.cg.oms.converter;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.cg.oms.model.Order;
import com.cg.oms.vo.OrderVo;

/**
 * This function is used to convert the Order object to the OrderVo Object and
 * vise versa this is used for getting and returning the object for security
 * purpose.
 * 
 * @author Inam - PC
 *
 */

@Component
public class OrderConverter
{

	/**
	 * This method converts model object to value object
	 * 
	 * @param order
	 * @return
	 */

	public OrderVo modelToVo(Order order)
	{
		OrderVo orderVo = new OrderVo();
		orderVo.setOrderDate(order.getOrderDate());
		orderVo.setOrderId(order.getOrderId());
		orderVo.setShippingAddress(order.getAddress());
		orderVo.setUser(order.getUser());
		orderVo.setCart(order.getCart());
		return orderVo;
	}

	/**
	 * This method converts model object to value object
	 * 
	 * @param order
	 * @return
	 */

	public List<OrderVo> modelToVo(List<Order> order)
	{
		return order.stream().map(x -> modelToVo(x)).collect(Collectors.toList());
	}

	/**
	 * This method converts value object to model object
	 * 
	 * @param orderVo
	 * @return
	 */

	public Order voToModel(OrderVo orderVo)
	{
		Order order = new Order();
		order.setOrderDate(orderVo.getOrderDate());
		order.setOrderId(orderVo.getOrderId());
		order.setAddress(orderVo.getShippingAddress());
		order.setUser(orderVo.getUser());
		orderVo.setCart(order.getCart());

		return order;
	}

	/**
	 * This method converts value object to model object
	 * 
	 * @param orderVo
	 * @return
	 */
	public List<Order> voToModel(List<OrderVo> orderVo)
	{
		return orderVo.stream().map(x -> voToModel(x)).collect(Collectors.toList());
	}

}
