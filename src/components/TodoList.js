import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../redux";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const toggleTodo = todoId => dispatch(toggleTodoAction(todoId));
  const deleteTodo = todoId => dispatch(deleteTodoAction(todoId));

  return (
    <ul>
      {todos.map(todo => (
        <li>
          <input
            type="checkbox"
            checked={todo.compleated}
            onChange={toggleTodo.bind(null, todo.id)}
          />
          <span>{todo.name}</span>
          <span
            className="delete-button"
            onClick={deleteTodo.bind(null, todo.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
