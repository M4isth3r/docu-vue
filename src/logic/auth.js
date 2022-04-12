import axios from "axios";

// Faki API for login/register https://reqres.in/
const ENDPOINT_PATH =  "https://reqres.in/api"
/*
REGISTER
  "email": "eve.holt@reqres.in"
  "password": "pistol"
LOGIN
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
*/
export default {
  register(email, password) {
    const user = { email, password };
    return axios.post(`${ENDPOINT_PATH}/register`, user);
  },
  login(email, password) {
    const user = { email, password };
    return axios.post(`${ENDPOINT_PATH}/login`, user);
  }
}
