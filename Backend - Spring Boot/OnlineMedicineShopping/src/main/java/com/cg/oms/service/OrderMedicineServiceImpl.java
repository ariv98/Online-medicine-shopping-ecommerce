package com.cg.oms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.oms.converter.OrderMedicineConverter;
import com.cg.oms.exception.OrderNotFoundException;
import com.cg.oms.model.OrderMedicine;
import com.cg.oms.repository.OrderMedicineRepository;
import com.cg.oms.vo.OrderMedicineVo;

/**
 * OrderMedicine Service
 * 
 * @author Inam - PC
 *
 */
@Service
public class OrderMedicineServiceImpl implements OrderMedicineService
{
	public static final String EXCEPTION_MESSAGE = "No order found with this id ";

	@Autowired
	private OrderMedicineRepository orderMedicineRepository;
	@Autowired
	private OrderMedicineConverter orderMedicineConverter;

	/**
	 * Used to retrieve all the list of values from ordermedicine table
	 * 
	 * @return
	 */
	@Override
	public List<OrderMedicineVo> getAllOrderMedicine()
	{
		List<OrderMedicine> orderMedicine = orderMedicineRepository.findAll();
		return orderMedicineConverter.modelToVo(orderMedicine);
	}

	/**
	 * Used to get medicineorder on basis of the given name
	 * 
	 * @param id
	 * @return
	 * @throws OrderNotFoundException
	 */
	@Override
	public OrderMedicineVo getOrderMedicineById(Long id) throws OrderNotFoundException
	{
		OrderMedicine orderMedicine = orderMedicineRepository.findById(id)
				.orElseThrow(() -> new OrderNotFoundException(EXCEPTION_MESSAGE + id));
		return orderMedicineConverter.modelToVo(orderMedicine);
	}

	/**
	 * Used to store the orderMedicine given from the controllerr
	 * 
	 * @param vo
	 * @return
	 */
	@Override
	public String saveOrderMedicine(OrderMedicineVo vo)
	{
		OrderMedicine orderMedicine = orderMedicineConverter.voToModel(vo);
		orderMedicine = orderMedicineRepository.save(orderMedicine);
		OrderMedicineVo omvo = orderMedicineConverter.modelToVo(orderMedicine);
		return "Cart Added SuccessFully!!! " + omvo.toString();
	}

}
