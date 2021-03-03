import axios from "axios";

const MEDICINE_API_BASE_URL = "http://localhost:8080/api/v1/medicine";

class MedicineService {
  getMedicines() {
    return axios.get(MEDICINE_API_BASE_URL + "/getallmedicine");
  }

  createMedicine(medicine) {
    return axios.post(MEDICINE_API_BASE_URL + "/addnewMedicine/", medicine);
  }

  getMedicineById(medicineId) {
    return axios.get(MEDICINE_API_BASE_URL + "/getmedicine/" + medicineId);
  }

  updateMedicine(medicine, medicineId) {
    return axios.put(MEDICINE_API_BASE_URL + "/" + medicineId, medicine);
  }

  deleteMedicine(medicineId) {
    return axios.delete(
      MEDICINE_API_BASE_URL + "/deletemedicine/" + medicineId
    );
  }
}

export default new MedicineService();
