import { getAccessToken } from "@/utils/token";
import axios from "axios";
export const apiClient = axios.create({
  baseURL: "https://e-inakademie.free-homes.de/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
