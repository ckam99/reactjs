import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: "",
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  }
});

baseApi.interceptors.request.use((request) => {
  return request;
});

baseApi.interceptors.response.use((response) => {
  return response;
});

export default baseApi;
