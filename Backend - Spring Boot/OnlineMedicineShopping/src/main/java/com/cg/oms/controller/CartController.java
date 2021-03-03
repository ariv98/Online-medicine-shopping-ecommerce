package com.cg.oms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.oms.exception.CartNotFoundException;
import com.cg.oms.service.CartServiceImpl;
import com.cg.oms.vo.CartVo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CartController
{

	/**
	 * We are autowiring the cart service layer to this controller layer of cart
	 * 
	 * @param cartServiceImpl
	 */

	@Autowired
	private CartServiceImpl cartServiceImpl;

	/**
	 * This below function is used to create a new cart and redirects to the
	 * CartService
	 * 
	 * @param CartVo
	 * @return
	 */

	@PostMapping("/cart/newcart")
	public ResponseEntity<CartVo> addCart(@RequestBody CartVo cartVo)
	{
		cartServiceImpl.saveCart(cartVo);
		return ResponseEntity.ok(cartVo);
	}

	/**
	 * This below function is used to get a specific cart based on the given ID and
	 * redirects to the CartService
	 * 
	 * @exception CartNotFoundException
	 * @param CartVo
	 * @return
	 */

	@GetMapping("/cart/getAll")
	public ResponseEntity<List<CartVo>> getAllCarts()
	{
		List<CartVo> cartVo = cartServiceImpl.getAllCarts();
		return ResponseEntity.ok().body(cartVo);
	}

	@GetMapping("/cart/getcartbyId/{id}")
	public ResponseEntity<CartVo> getCartId(@PathVariable(value = "id") Long cartId) throws CartNotFoundException
	{
		CartVo cartVo = cartServiceImpl.getCartById(cartId);
		return ResponseEntity.ok().body(cartVo);
	}

	/**
	 * This below function is used to delete cart and redirects to the CartService
	 * 
	 * @exception CartNotFoundException
	 * @param CartVo
	 * @return
	 */

	@DeleteMapping("/cart/removecart/{cartid}")
	public String deleteCart(@PathVariable(value = "cartid") Long cartId) throws CartNotFoundException
	{
		return cartServiceImpl.deleteCart(cartId);
	}
}
