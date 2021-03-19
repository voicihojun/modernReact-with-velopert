import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "jules",
      email: "jules@example.com",
    },
    {
      id: 2,
      username: "irene",
      email: "irene@example.com",
    },
    {
      id: 3,
      username: "beaugus",
      email: "beaugus@example.com",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
