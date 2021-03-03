package com.cg.oms.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.stereotype.Component;

@Entity
@Component
public class OrderMedicine
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long orderMedicineId;

	@OneToOne(cascade = CascadeType.MERGE)
	private Order order;

	@OneToMany(cascade = CascadeType.MERGE)
	private List<Medicine> medicineList = new ArrayList<>();

	private Integer quantity;

	private Double price;

	public OrderMedicine()
	{
		super();
	}

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

	@Override
	public String toString()
	{
		return "OrderMedicine [orderMedicineId=" + orderMedicineId + ", order=" + order + ", medicineList="
				+ medicineList + ", quantity=" + quantity + ", price=" + price + "]";
	}

}