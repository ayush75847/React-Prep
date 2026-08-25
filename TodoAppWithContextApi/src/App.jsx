import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const storedTodos = localStorage.getItem("todos");

    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (todo) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const updateTodo = (id, todo) => {
    setTodoList((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((prevTodo) => {
        if (prevTodo.id === id) {
          return { ...prevTodo, completed: !prevTodo.completed };
        } else return prevTodo;
      }),
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="app">
        <div className="todo-container">
          <div className="todo-header">
            <span className="header-line"></span>
            <h1>My Todos</h1>
            <p>Stay focused. Get things done.</p>
          </div>

          <TodoProvider
            value={{
              todos: todoList,
              addTodo,
              updateTodo,
              deleteTodo,
              toggleComplete,
            }}
          >
            <InputField />

            <div className="todo-list">
              {todoList.map((todo) => (
                <div className="todo-wrapper" key={todo.id}>
                  <TodoList todo={todo} />
                </div>
              ))}
            </div>
          </TodoProvider>
        </div>
      </div>
    </>
  );
}

export default App;
