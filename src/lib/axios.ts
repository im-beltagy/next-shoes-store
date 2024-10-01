import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.API_KEY + "/api",
});

export const endpoints = {
  auth: {
    login: "/auth/login",
    refreshToken: "/auth/refresh-token",
  },
  products: {
    getAll: "/products",
    getOne: (id: string) => `/products/${id}`,
  },
};
