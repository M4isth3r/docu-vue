import axios from "axios";
import Cookies from "js-cookie";

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
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  removeUserLogged() {
    Cookies.remove('userLogged');
  },
  register(email, password) {
    const user = { email, password };
    return axios.post(`${ENDPOINT_PATH}/register`, user);
  },
  login(email, password) {
    const user = { email, password };
    return axios.post(`${ENDPOINT_PATH}/login`, user);
  }
}
