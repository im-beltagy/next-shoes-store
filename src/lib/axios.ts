import axios from "axios";
import { cookies } from "next/headers";
import { defaultLocale } from "yup";

const axiosInstance = axios.create({
  baseURL: process.env.API_KEY + "/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const locale = cookies().get("NEXT_LOCALE")?.value || defaultLocale;
    const token = cookies().get("access_token")?.value;

    config.headers["Accept-Language"] = locale;
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axiosInstance };

export const endpoints = {
  auth: {
    login: "/auth/login",
    refreshToken: "/auth/refresh-token",
  },
  products: {
    getAll: "/products",
  },
};
