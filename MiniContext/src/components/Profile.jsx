import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="card profile-card">
      <h2>Current Users</h2>

      {user.length === 0 ? (
        <h1>No Current User</h1>
      ) : (
        <ul>
          {user.map((user, idx) => (
            <li key={idx}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Profile;
