import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <>
      <form className="add-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="add-input"
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

export default AddTodo;
