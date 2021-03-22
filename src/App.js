import React, { useRef, useState, useMemo } from "react";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("Counting Active Users...");
  return users.filter((user) => user.active).length;
}

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
      active: true,
    },
    {
      id: 2,
      username: "irene",
      email: "irene@example.com",
      active: false,
    },
    {
      id: 3,
      username: "beaugus",
      email: "beaugus@example.com",
      active: false,
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

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList onRemove={onRemove} onToggle={onToggle} users={users} />
      <div>number of active users : {count}</div>
    </>
  );
}

export default App;
