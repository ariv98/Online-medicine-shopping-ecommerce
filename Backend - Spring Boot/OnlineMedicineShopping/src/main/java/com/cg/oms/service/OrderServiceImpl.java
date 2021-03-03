package com.cg.oms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.oms.converter.OrderConverter;
import com.cg.oms.exception.OrderNotFoundException;
import com.cg.oms.model.Order;
import com.cg.oms.repository.OrderRepository;
import com.cg.oms.vo.OrderVo;

/**
 * OrderService
 * 
 * @author Inam - PC
 *
 */
@Service
public class OrderServiceImpl implements OrderService
{
	public static final String EXCEPTION_MESSAGE = "No order found with this id ";

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private OrderConverter orderConverter;

	/**
	 * Get a specific order based on the given id.
	 * 
	 * @param id
	 * @return
	 * @throws OrderNotFoundException
	 */
	@Override
	public OrderVo getOrderById(Long id) throws OrderNotFoundException
	{
		Order order = orderRepository.findById(id)
				.orElseThrow(() -> new OrderNotFoundException(EXCEPTION_MESSAGE + id));
		return orderConverter.modelToVo(order);
	}

	/**
	 * used to place the order
	 * 
	 * @param orderVo
	 * @return
	 */
	@Override
	public String placeOrder(OrderVo orderVo)
	{
		Order order = orderConverter.voToModel(orderVo);
		order = orderRepository.save(order);
		OrderVo savedVo = orderConverter.modelToVo(order);
		return "Registered SuccessFully!!! " + savedVo.toString();
	}

	/**
	 * Used to cancel the order
	 * 
	 * @param id
	 * @return
	 * @throws OrderNotFoundException
	 */

	@Override
	public String cancelOrder(Long id) throws OrderNotFoundException
	{
		Order order = orderRepository.findById(id)
				.orElseThrow(() -> new OrderNotFoundException(EXCEPTION_MESSAGE + id));
		orderRepository.delete(order);
		return "Record Deleted Successfully!!";
	}

}
