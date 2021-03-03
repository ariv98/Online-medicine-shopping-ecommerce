
package com.cg.oms.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.cg.oms.model.Medicine;
import com.cg.oms.model.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
public class CartVo implements Serializable
{
	/**
	 * Generated serialVersionUID
	 */
	private static final Long serialVersionUID = 1708373541579982421L;
	@JsonProperty(value = "cartId", access = Access.READ_ONLY)
	private Long cartId;
	private List<Medicine> medicineList = new ArrayList<>();
	private User user;
	@JsonProperty(value = "quantity")
	private Integer quantity;
	@JsonProperty(value = "costPerPrice")
	private Float costPerPiece;

	/**
	 * Getters and Setters
	 * 
	 * @return
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

}