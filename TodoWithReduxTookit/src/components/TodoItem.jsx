import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const dispatch = useDispatch();

  function handleEdit(todo) {
    dispatch(updateTodo({ id: todo.id, todo: todoMsg }));
    setEditable(false);
  }

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {editable ? (
        <input
          className="edit-input"
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
      ) : (
        <span className="todo-text">{todoMsg}</span>
      )}

      <div className="todo-actions">
        <button
          className="edit-btn"
          onClick={() => {
            if (editable) handleEdit(todo);
            else setEditable(true);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
