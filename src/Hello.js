import React from "react";

// export const Hello = (props) => (
//   <div style={{ color: props.color }}>Hello, {props.name}</div>
// );

function Hello({ color, name }) {
  return <div style={{ color }}>Hello, {name}</div>;
}

Hello.defaultProps = {
  name: "no name",
};

export default Hello;
