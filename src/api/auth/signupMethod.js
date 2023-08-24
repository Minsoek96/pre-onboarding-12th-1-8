import { API_ROUTES } from '../../constants/constants';
import { axiosJsonInstance } from '../instance';
export const signUpMethod = (data) => {
  return axiosJsonInstance.post(API_ROUTES.SIGNUP, data);
};