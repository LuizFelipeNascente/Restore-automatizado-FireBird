import axios from "axios";

const api = axios.create({
  baseURL: "Seu servidor"
});

export default api;