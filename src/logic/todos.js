import axios from "axios";
const API = "https://jsonplaceholder.typicode.com/todos";

export default {
  get() {
    return axios.get(API);
  },
  getTodo(id) {
    return axios.get(`${API}/${id}`)
  },
  create(todo) {
    return axios.post(API, todo);
  },
  update(todo) {
    return axios.put(`${API}/${todo.id}`, todo);
  },
  delete(id) {
    return axios.delete(API, id);
  }
};
