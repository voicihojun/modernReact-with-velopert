import React, { useRef, useState } from "react";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);

    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
