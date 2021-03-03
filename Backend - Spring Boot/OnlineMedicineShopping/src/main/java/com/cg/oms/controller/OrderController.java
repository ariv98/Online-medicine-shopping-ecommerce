package com.cg.oms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.oms.exception.OrderNotFoundException;
import com.cg.oms.service.OrderServiceImpl;
import com.cg.oms.vo.OrderVo;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/")
@RestController
public class OrderController
{

	/**
	 * We are autowiring the order service layer to this controller layer of cart
	 * 
	 * @param orderServiceImpl
	 */
	@Autowired
	private OrderServiceImpl orderServiceImpl;

	/**
	 * This controller is used to perform place order option but this function is
	 * based on the cart table. this table is created only when the user add items
	 * to cart and send to the Place Order option
	 * 
	 * @param orderVo
	 * @return
	 */
	@PostMapping("/order/placeOrder")
	public ResponseEntity<OrderVo> placeOrder(@RequestBody OrderVo orderVo)
	{
		orderServiceImpl.placeOrder(orderVo);
		return ResponseEntity.ok(orderVo);
	}

	/**
	 * 
	 * This function is used to delete or cancel the specific order
	 * 
	 * @param id
	 * @return
	 * @throws OrderNotFoundException
	 */
	@GetMapping("/order/cancelOrder/{id}")
	public String cancelOrder(@PathVariable(value = "id") Long id) throws OrderNotFoundException
	{
		return orderServiceImpl.cancelOrder(id);
	}

	/**
	 * This function is used to update a order such us quantity of the product etcc.
	 * 
	 * @param orderId
	 * @return
	 * @throws OrderNotFoundException
	 */
	@GetMapping("/order/order/{id}")
	public ResponseEntity<OrderVo> viewOrder(@PathVariable(value = "id") Long orderId) throws OrderNotFoundException
	{
		return ResponseEntity.ok().body(orderServiceImpl.getOrderById(orderId));
	}

}