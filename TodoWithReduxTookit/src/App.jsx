import "./App.css";
import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="app-container">
        <div className="todo-card">
          <h1 className="app-title">My Todos</h1>

          <AddTodo />

          {todos.length === 0 && (
            <h2 className="empty-message">No Current Tasks</h2>
          )}

          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-list-item">
                <TodoItem todo={todo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
