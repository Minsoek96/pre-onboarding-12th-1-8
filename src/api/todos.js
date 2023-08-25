import { API_ROUTES } from "./config";
import { http } from "./instance";
export const createTodos = (todo) => {
  return http.post(API_ROUTES.TODOS, { todo });
};
export const deleteTodos = (id) => {
  return http.delete(`${API_ROUTES.TODOS}/${id}`);
};
export const getTodos = () => {
  return http.get(API_ROUTES.TODOS);
};
export const updateTodos = (id, data) => {
  return http.put(`${API_ROUTES.TODOS}/${id}`, data);
};
