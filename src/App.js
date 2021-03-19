import React from "react";
import { Hello } from "./Hello";
import "./App.css";

function App() {
  const name = "React";
  const style = {
    background: "pink",
    color: "orange",
    fontSize: 24,
    padding: "1rem",
  };
  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
