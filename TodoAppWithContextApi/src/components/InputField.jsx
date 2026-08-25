import React, { useState } from "react";
import TodoList from "./TodoItem";
import useTodo from "../context/TodoContext";

function InputField() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  function handleSubmit() {
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo("");
  }
  return (
    <>
      <form
        className="todo-form"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="todo-input"
          type="text"
          placeholder="Enter a new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className="add-btn" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
}

export default InputField;
