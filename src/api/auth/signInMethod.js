import { API_ROUTES } from '../../constants/constants';
import { axiosJsonInstance } from '../instance';
export const signInMethod = (data) => {
  return axiosJsonInstance.post(API_ROUTES.SIGNIN, data);
};