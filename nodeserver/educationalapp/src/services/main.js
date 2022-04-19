import axios from "axios";

export const bixious = axios.create({
  headers : {
    "Authorization" : `bearer ${localStorage.getItem("token")}`
  },
    baseURL: "http://localhost:8000/api/" 
  });