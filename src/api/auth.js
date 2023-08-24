import { http } from "./instance";
import { API_ROUTES } from "./config";

export const signUp = (userData) => {
  return http.post(API_ROUTES.SIGN_UP, userData);
};

export const signIn = (userData) => {
  return http.post(API_ROUTES.SIGN_IN, userData);
};
