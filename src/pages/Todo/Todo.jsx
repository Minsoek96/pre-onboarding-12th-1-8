import React from "react";
import styled from "styled-components";

import { TodoProvider } from "../../context/TodoContext";
import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";

const TodoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Todo = () => {
  return (
    <TodoProvider>
      <TodoStyle>
        <TodoCreator />
        <TodoList />
      </TodoStyle>
    </TodoProvider>
  );
};
