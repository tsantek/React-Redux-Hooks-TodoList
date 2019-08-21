import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux";
import uuid from "uuid/v4";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      addTodoAction({
        id: uuid(),
        name: todo,
        compleated: false
      })
    );
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="add a todo"
        value={todo}
        onChange={onChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
