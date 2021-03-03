import axios from "axios";

const CART_API_BASE_URL = "http://localhost:8080/api/v1/cart";

class CartService {
  /*  getCarts(){
        return axios.get(CART_API_BASE_URL+'/getallmedicine');
    } */

  createCart(cart) {
    console.log(cart);
    //alert(JSON.stringify(cart))
    console.log(CART_API_BASE_URL + "/newcart/", cart);
    return axios.post(CART_API_BASE_URL + "/newcart/", cart);
  }

  getCartById(cartId) {
    return axios.get(CART_API_BASE_URL + "/getcartbyId/" + cartId);
  }

  deleteCart(cartId) {
    return axios.delete(CART_API_BASE_URL + "/removecart/" + cartId);
  }

  getAllCarts() {
    return axios.get(CART_API_BASE_URL + "/getAll/");
  }
}

export default new CartService();
