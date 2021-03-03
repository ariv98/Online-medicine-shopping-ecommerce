package com.cg.oms.model;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

/**
 * UserEntity class
 * 
 * @author MOHAMED INAMUL HASAN
 *
 */
@Entity
@Component
@Table(name = "order_table")
public class Order
{

	/**
	 * Creating Instance variables for ordermodel class
	 */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long orderId;

	@ManyToOne(cascade = CascadeType.MERGE)
	private User user;

	@OneToOne(cascade = CascadeType.MERGE)
	private Cart cart;

	private LocalDateTime orderDate = LocalDateTime.now();

	private String shippingAddress;

	/**
	 * 
	 * Getters and Setters for the above instance variables
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

	public Cart getCart()
	{
		return cart;
	}

	public void setCart(Cart cart)
	{
		this.cart = cart;
	}

	public void setOrderDate(LocalDateTime orderDate)
	{
		this.orderDate = orderDate;
	}

	public String getAddress()
	{
		return shippingAddress;
	}

	public void setAddress(String shippingAddress)
	{
		this.shippingAddress = shippingAddress;
	}

	/**
	 * 
	 * To String Methods for the class Order
	 * 
	 * 
	 */

	@Override
	public String toString()
	{
		return "Order [orderId=" + orderId + ", user=" + user + ", orderDate=" + orderDate + ", Address="
				+ shippingAddress + "]";
	}

}