import axios from "axios";

// Faki API for login/register https://reqres.in/
const ENDPOINT_PATH =  "https://reqres.in/api/"

export default {
  register(email, password) {
    // email: eve.holt@reqres.in
    // password: pistol
    const user = { email, password };
    return axios.post(`${ENDPOINT_PATH}register`, user);
  }
}
