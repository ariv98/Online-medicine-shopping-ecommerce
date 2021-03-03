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

/**
 * CartEntity class
 * 
 * @author
 *
 */
@Entity
@Component
public class Cart
{

	/**
	 * Creating Instance variables for the Admin Entity Class
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cartId;

	@OneToMany(cascade = CascadeType.MERGE)
	private List<Medicine> medicineList = new ArrayList<>();

	@OneToOne(cascade = CascadeType.MERGE)
	private User user;

	private Integer quantity;

	private Float costPerPiece;

	/**
	 * creating parameterized and default constructor
	 */
	public Cart()
	{
		super();
	}

	/**
	 * Creating Getter and Setter methods
	 */
	public Long getCartId()
	{
		return cartId;
	}

	public void setCartId(Long cartId)
	{
		this.cartId = cartId;
	}

	public List<Medicine> getMedicineList()
	{
		return medicineList;
	}

	public void setMedicineList(List<Medicine> medicineList)
	{
		this.medicineList = medicineList;
	}

	public User getUser()
	{
		return user;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	public Integer getQuantity()
	{
		return quantity;
	}

	public void setQuantity(Integer quantity)
	{
		this.quantity = quantity;
	}

	public Float getCostPerPiece()
	{
		return costPerPiece;
	}

	public void setCostPerPiece(Float costPerPiece)
	{
		this.costPerPiece = costPerPiece;
	}

	/**
	 * Overriding and implementing toString method to retrieve all values in the
	 * instance of CartEntity Class
	 */

	@Override
	public String toString()
	{
		return "Cart [cartId=" + cartId + ", medicineList=" + medicineList + ", user=" + user + ", quantity=" + quantity
				+ ", costPerPiece=" + costPerPiece + "]";
	}

}