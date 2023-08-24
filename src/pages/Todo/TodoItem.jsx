import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TodoDispatchContext } from "../../context/TodoContext";
import SignButton from "../../components/SignButton";

const TodoItemStyle = styled.li`
  width: 450px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.6);
  margin: 12px auto;
  &:hover {
    scale: 1.05;
  }
  input[type="checkbox"] {
    width: 30px;
    height: 30px;
    margin-left: 8px;
  }
`;

const TodoView = styled.div`
  width: 300px;
  overflow: hidden;
`;

const Input = styled.input`
  height: 30px;
  width: 95%;
  border-radius: 12px;
`;

const CheckBox = styled.input`
  font-size: 35rem;
`;

const TodoController = styled.div`
  display: flex;
  margin: 0 3px;
  button {
    height: 40px;
    padding: 5px;
    background-color: gray;
    text-align: center;
    &:hover {
      background-color: red;
    }
  }
`;

const TodoItem = ({ id, todo, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(isCompleted);
  const [contents, setContents] = useState(todo);
  const editRef = useRef(null);
  const { onEdit, onDelete } = useContext(TodoDispatchContext);

  useEffect(() => {
    if (isEditing) {
      editRef.current?.focus();
    }
  }, [isEditing]);

  const handleChangeTodo = () => {
    if (isEditing && contents.length <= 0) {
      alert("수정값을 입력해주세요.");
      return;
    }
    if (isEditing) {
      onEdit(id, { todo: contents, isCompleted: completed });
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteTodo = () => {
    if (isEditing) {
      setIsEditing(false);
      setContents(todo);
      return;
    }
    onDelete(id);
  };

  const handleChangeCompleted = () => {
    setCompleted(!completed);
    onEdit(id, { todo: contents, isCompleted: !completed });
  };

  return (
    <TodoItemStyle>
      <CheckBox
        type="checkbox"
        checked={completed}
        onChange={handleChangeCompleted}
      />
      <TodoView>
        {isEditing ? (
          <Input
            ref={editRef}
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            data-testid="modify-input"
            placeholder="TODO"
          ></Input>
        ) : (
          <h5>{todo}</h5>
        )}
      </TodoView>
      <TodoController>
        <SignButton
          isValid={true}
          text={isEditing ? "제출" : "수정"}
          onClick={handleChangeTodo}
          id={isEditing ? "submit-button" : "modify-button"}
        ></SignButton>
        <SignButton
          isValid={true}
          text={isEditing ? "취소" : "삭제"}
          onClick={handleDeleteTodo}
          id={isEditing ? "cancel-button" : "delete-button"}
        ></SignButton>
      </TodoController>
    </TodoItemStyle>
  );
};

export default React.memo(TodoItem);
