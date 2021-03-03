import axios from 'axios';

const ORDERMED_API_BASE_URL = "http://localhost:8080/api/v1/Ordermedicine";

class OrderMedicineService {

    addToOrderMedicine(ordermedicine) {
        console.log("ORDER TABLE CALLED")
        console.log(ordermedicine)
        return axios.post(ORDERMED_API_BASE_URL+'/addnew/', ordermedicine);
    }



}

export default new OrderMedicineService()