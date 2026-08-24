import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleSubmit() {
    setUser((prev) => [
      ...prev,
      {
        username,
        password,
      },
    ]);

    setUsername("");
    setPassword("");
  }
  return (
    <>
      <div className="card login-card">
        <h2>Login Form</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <label>Username:</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
