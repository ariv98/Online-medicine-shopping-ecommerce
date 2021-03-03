//OrderMedicineController
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
import com.cg.oms.service.OrderMedicineServiceImpl;
import com.cg.oms.vo.OrderMedicineVo;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/")
@RestController
public class OrderMedicineController
{

	/**
	 * We are autowiring the cart service layer to this controller layer of cart
	 * 
	 * @param cartService
	 */
	@Autowired
	private OrderMedicineServiceImpl orderMedicineServiceImpl;

	/**
	 * This function is used to add new order medicine column and redirect it to the
	 * service layer
	 * 
	 * @param orderMedicineVo
	 * @return
	 */
	@PostMapping("/Ordermedicine/addnew")
	public ResponseEntity<OrderMedicineVo> addNewOrderMedicine(@RequestBody OrderMedicineVo orderMedicineVo)
	{
		orderMedicineServiceImpl.saveOrderMedicine(orderMedicineVo);
		return ResponseEntity.ok(orderMedicineVo);
	}

	/**
	 * This controller is used to get the specific orderMedicinevalue from the given
	 * Id
	 * 
	 * @param orderId
	 * @return
	 * @throws OrderNotFoundException
	 */
	@GetMapping("/OrderMedicine/{id}")
	public ResponseEntity<OrderMedicineVo> getOrderMedicineId(@PathVariable(value = "id") Long orderId)
			throws OrderNotFoundException
	{
		OrderMedicineVo orderMedicineVo = orderMedicineServiceImpl.getOrderMedicineById(orderId);
		return ResponseEntity.ok().body(orderMedicineVo);
	}

}