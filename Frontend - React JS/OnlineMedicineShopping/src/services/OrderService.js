import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8084/api/v1/order";

class OrderService {

    addToOrder(order) {
        console.log("ORDER TABLE CALLED")
        console.log(order)
        return axios.post(ORDER_API_BASE_URL+'/placeOrder/',order);
    }

    viewOrderByUserId(userid) {
        console.log(userid)
        return axios.get(ORDER_API_BASE_URL+'/userid/',userid);
    }

    getOrderById(userid) {
        console.log(userid)
        return axios.get(ORDER_API_BASE_URL+'/userid/',userid);
    }

    getOrders(){
        console.log("getorder")
        return axios.get(ORDER_API_BASE_URL+'/getallorder');
    }

    // createOrder(order){
        
    //     return axios.post(ORDER_API_BASE_URL+'/placeOrder/', order);
    // }
}

export default new OrderService()