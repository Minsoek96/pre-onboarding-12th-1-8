import { API_ROUTES } from "../../constants/constants";
import { apiAuthJsonInstance } from "../instance";
export const createTodos = (todo) => {
  return apiAuthJsonInstance.post(API_ROUTES.TODOS, { todo });
};
export const deleteTodos = (id) => {
  return apiAuthJsonInstance.delete(`${API_ROUTES.TODOS}/${id}`);
};
export const getTodos = () => {
  return apiAuthJsonInstance.get(API_ROUTES.TODOS);
};
export const updateTodos = (id, data) => {
  return apiAuthJsonInstance.put(`${API_ROUTES.TODOS}/${id}`, data);
};
