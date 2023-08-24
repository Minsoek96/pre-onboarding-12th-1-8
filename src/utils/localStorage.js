import { ACCESS_TOKEN_KEY } from "../api/config";
export const setAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};
