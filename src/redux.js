import { createStore } from "redux";
import uuid from "uuid/v4";

const initialState = {
  todos: [
    { id: uuid(), name: "go to gym", compleated: false },
    { id: uuid(), name: "go to store", compleated: false }
  ]
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, compleated: !todo.compleated } : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    default:
      return state;
  }
}

export const addTodoAction = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const toggleTodoAction = todoId => {
  return {
    type: "TOGGLE_TODO",
    payload: todoId
  };
};

export const deleteTodoAction = todoId => {
  return {
    type: "DELETE_TODO",
    payload: todoId
  };
};
