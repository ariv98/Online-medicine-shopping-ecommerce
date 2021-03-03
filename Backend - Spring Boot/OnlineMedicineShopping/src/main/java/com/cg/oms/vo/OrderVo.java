
package com.cg.oms.vo;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.cg.oms.model.Cart;
import com.cg.oms.model.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
public class OrderVo implements Serializable
{

	/**
	 * Generated serialVersionUID
	 */
	private static final Long serialVersionUID = 5218181055076855236L;
	@JsonProperty(value = "orderId", access = Access.READ_ONLY)
	private Long orderId;
	private User user;
	private Cart cart;
	@JsonProperty(value = "orderDate")
	private LocalDateTime orderDate = LocalDateTime.now();
	@JsonProperty(value = "orderShippingAddress")
	private String shippingAddress;

	/**
	 * Getter and Setters
	 * 
	 * @return
	 */
	public Long getOrderId()
	{
		return orderId;
	}

	public void setOrderId(Long orderId)
	{
		this.orderId = orderId;
	}

	public Cart getCart()
	{
		return cart;
	}

	public void setCart(Cart cart)
	{
		this.cart = cart;
	}

	public User getUser()
	{
		return user;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	public LocalDateTime getOrderDate()
	{
		return orderDate;
	}

	public void setOrderDate(LocalDateTime orderDate)
	{
		this.orderDate = orderDate;
	}

	public String getShippingAddress()
	{
		return shippingAddress;
	}

	public void setShippingAddress(String shippingAddress)
	{
		this.shippingAddress = shippingAddress;
	}

}