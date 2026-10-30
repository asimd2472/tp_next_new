import axios from "axios";
import { getAuthSessionSnapshot } from "@/services/auth.service";

const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15000,
});

authApi.interceptors.request.use((config) => {
  if (typeof window === "undefined") return config;

  const session = getAuthSessionSnapshot().session;
  if (session) {
    config.headers.Authorization = "Bearer " + session.accessToken;
    // config.headers.Authorization = `${session.tokenType} ${session.accessToken}`;
  }

  return config;
});

export default authApi;
