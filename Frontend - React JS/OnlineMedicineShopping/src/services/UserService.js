import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL + "/all");
  }

  createUser(user) {
    console.log(user);

    return axios.post(USER_API_BASE_URL + "/add/", user);
  }

  getUserById(userId) {
    return axios.get(USER_API_BASE_URL + "/get/" + userId);
  }
  getUserByEmailId(emailId) {
    return axios.get(USER_API_BASE_URL + "/getemail/" + emailId);
  }

  updateUser(user, userId) {
    return axios.put(USER_API_BASE_URL + "/update/" + userId, user);
  }

  deleteUser(userId) {
    return axios.delete(USER_API_BASE_URL + "/delete/" + userId);
  }
}

export default new UserService();
