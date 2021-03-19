import React, { useRef } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
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

  const nextId = useRef(4);
  console.log(nextId.current);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
