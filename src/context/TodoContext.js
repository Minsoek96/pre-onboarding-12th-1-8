import React, { useReducer, useEffect, useState, useMemo } from "react";
import { reducer } from "../reducer/TodoReducer";
import { createTodos, deleteTodos, getTodos, updateTodos } from "../api/todos";

export const TodoStateContext = React.createContext([]);
export const TodoDispatchContext = React.createContext({
  onCreate: () => {},
  onEdit: () => {},
  onDelete: () => {},
});

export const TodoProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, []);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTodos()
      .then((res) => dispatch({ type: "INIT", data: res.data }))
      .catch((error) => {
        throw error;
      });
  }, []);

  const onCreate = (todo) => {
    createTodos(todo)
      .then((res) => dispatch({ type: "CREATE", data: res.data }))
      .catch((error) => {
        throw error;
      });
  };

  const onDelete = (targetId) => {
    deleteTodos(targetId)
      .then(() => dispatch({ type: "DELETE", id: targetId }))
      .catch((error) => {
        throw error;
      });
  };

  const onEdit = (targetId, updataData) => {
    updateTodos(targetId, updataData)
      .then((res) => dispatch({ type: "EDIT", data: res.data }))
      .catch((error) => {
        setError(error);
      });
  };

  const todoActions = useMemo(
    () => ({
      onCreate,
      onEdit,
      onDelete,
    }),
    [],
  );

  if (error) {
    throw error;
  }

  return (
    <TodoStateContext.Provider value={data}>
      <TodoDispatchContext.Provider value={todoActions}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
