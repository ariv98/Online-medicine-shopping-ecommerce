package com.cg.oms.converter;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.cg.oms.model.Cart;
import com.cg.oms.vo.CartVo;


/**
 * This function is used to convert the Cart object to the CartVo Object and vise versa
 * this is used for getting and returning the object for security purpose.
 * @author Inam - PC
 *
 */

@Component
public class CartConverter
{
	
	
	/**
	 *  This method converts model object to value object
	 * @param cart
	 * @return
	 */

	public CartVo modelToVo(Cart cart)
	{
		CartVo cartVo = new CartVo();
		cartVo.setCartId(cart.getCartId());
		cartVo.setCostPerPiece(cart.getCostPerPiece());
		cartVo.setMedicineList(cart.getMedicineList());
		cartVo.setQuantity(cart.getQuantity());
		cartVo.setUser(cart.getUser());
		return cartVo;
	}

	
	/**
	 * This method converts model object to value object
	 * @param cart
	 * @return
	 */
	
	public List<CartVo> modelToVo(List<Cart> cart)
	{
		return cart.stream().map(x -> modelToVo(x)).collect(Collectors.toList());
	}

	
	/**
	 * This method converts value object to model object
	 * @param cartVo
	 * @return
	 */
	
	public Cart voToModel(CartVo cartVo)
	{
		Cart cart = new Cart();
		cart.setCartId(cartVo.getCartId());
		cart.setCostPerPiece(cartVo.getCostPerPiece());
		cart.setMedicineList(cartVo.getMedicineList());
		cart.setQuantity(cartVo.getQuantity());
		cart.setUser(cartVo.getUser());
		return cart;
	}

	/**
	 * This method converts value object to model object
	 * @param cartVo
	 * @return
	 */
	public List<Cart> voToModel(List<CartVo> cartVo)
	{
		return cartVo.stream().map(x -> voToModel(x)).collect(Collectors.toList());
	}

}
