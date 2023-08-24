import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";

import { TodoDispatchContext } from "../../context/TodoContext";
import SignButton from "../../components/SignButton";
import Input from "../../components/Input";

const TodoCreatorStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
`;

const TodoCreator = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [todo, setTodo] = useState("");
  const todoRef = useRef(null);

  const handleAddTodo = () => {
    if (todo.length > 0) {
      onCreate(todo);
      setTodo("");
    }
    todoRef.current?.focus();
  };

  return (
    <TodoCreatorStyle>
      <label htmlFor="new-todo-input"></label>
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={todoRef}
        data-testid="new-todo-input"
        placeholder="TODO값 입력"
      />
      <SignButton
        text="추가"
        id="new-todo-add-button"
        isValid={true}
        onClick={handleAddTodo}
      ></SignButton>
    </TodoCreatorStyle>
  );
};

export default TodoCreator;
