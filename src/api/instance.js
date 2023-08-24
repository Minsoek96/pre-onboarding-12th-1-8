import axios from "axios";
import { BASE_URL, ACCESS_TOKEN_KEY } from "./constants/api_routes";
const createAxiosInstance = (url, headers = {}) => {
  const instance = axios.create({ baseURL: url, ...headers });
  return instance;
};
const createAxiosJsonInstance = (url, headers = {}) => {
  const instance = createAxiosInstance(url, {
    ...headers,
    "Content-Type": "application/json",
  });
  return instance;
};
const accessTokenInjector = (config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (token === null) {
    throw new Error("no access token");
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};
export const axiosInstance = createAxiosInstance(BASE_URL);
export const axiosJsonInstance = createAxiosJsonInstance(BASE_URL);

export const apiAuthInstance = createAxiosInstance(BASE_URL);
apiAuthInstance.interceptors.request.use(accessTokenInjector);

export const apiAuthJsonInstance = createAxiosJsonInstance(BASE_URL);
apiAuthJsonInstance.interceptors.request.use(accessTokenInjector);