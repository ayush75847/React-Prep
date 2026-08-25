import { useState } from "react";
import React from "react";
import useTodo from "../context/TodoContext";

function TodoList({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  function toggleHandle() {
    toggleComplete(todo.id);
  }

  function editTodo() {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  }
  return (
    <>
      <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <div className="todo-left">
          <input
            className="todo-checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={toggleHandle}
          />

          <input
            className="todo-text"
            type="text"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isEditable}
          />
        </div>

        <div className="todo-actions">
          <button
            className={`edit-btn ${isEditable ? "save-mode" : ""}`}
            onClick={() => {
              if (todo.completed) return;
              if (isEditable) editTodo();
              else setIsEditable(true);
            }}
          >
            {isEditable ? "Save" : "Edit"}
          </button>

          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
