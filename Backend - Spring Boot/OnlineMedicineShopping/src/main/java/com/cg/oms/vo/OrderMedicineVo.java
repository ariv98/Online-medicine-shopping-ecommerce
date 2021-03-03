
package com.cg.oms.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.cg.oms.model.Medicine;
import com.cg.oms.model.Order;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
public class OrderMedicineVo implements Serializable
{

	/**
	 * Generated serialVersionUID
	 */
	private static final Long serialVersionUID = 8725207521762230972L;
	@JsonProperty(value = "orderMedicineId", access = Access.READ_ONLY)
	private Long orderMedicineId;
	private Order order;
	private List<Medicine> medicineList = new ArrayList<>();
	@JsonProperty(value = "quantity")
	private Integer quantity;
	@JsonProperty(value = "price")
	private Double price;

	/**
	 * Getters and Setters
	 * 
	 * @return
	 */
	public Long getOrderMedicineId()
	{
		return orderMedicineId;
	}

	public void setOrderMedicineId(Long orderMedicineId)
	{
		this.orderMedicineId = orderMedicineId;
	}

	public Order getOrder()
	{
		return order;
	}

	public void setOrder(Order order)
	{
		this.order = order;
	}

	public List<Medicine> getMedicineList()
	{
		return medicineList;
	}

	public void setMedicineList(List<Medicine> medicineList)
	{
		this.medicineList = medicineList;
	}

	public Integer getQuantity()
	{
		return quantity;
	}

	public void setQuantity(Integer quantity)
	{
		this.quantity = quantity;
	}

	public Double getPrice()
	{
		return price;
	}

	public void setPrice(Double price)
	{
		this.price = price;
	}

}