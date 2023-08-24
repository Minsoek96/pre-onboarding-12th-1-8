import { ACCESS_TOKEN_KEY } from '../constants/constants';
export const setAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
};