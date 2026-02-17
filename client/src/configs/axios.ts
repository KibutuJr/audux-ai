import { useAuth } from "@clerk/clerk-react";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL || "http://localhost:5000",
  withCredentials: true,
});

export const useAxios = () => {
  const { getToken } = useAuth();

  api.interceptors.request.use(async (config) => {
    const token = await getToken(); // <--- remove template
    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
};


export default api;