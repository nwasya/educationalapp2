import axios from "axios";

export const bixious = axios.create({
    baseURL: "http://localhost:8000/api/" 
  });