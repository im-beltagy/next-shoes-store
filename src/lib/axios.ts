import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.API_KEY + "/api",
});

export const endpoints = {
  products: {
    getAll: "/products",
  },
};
