import { useState } from "react";

const useTodos = (data) => {
  const [todos, setTodos] = useState(data);

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos([...todos, { userId: 1, id: todos[todos.length - 1].id + 1, title: title, completed: false }]);
  };

  return [todos, deleteTodo, addTodo];
};

export default useTodos;