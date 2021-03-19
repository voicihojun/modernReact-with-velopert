import React from "react";

// export const Hello = (props) => (
//   <div style={{ color: props.color }}>Hello, {props.name}</div>
// );

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {/* {isSpecial ? <b>*</b> : null} */}
      {isSpecial && <b>**</b>}
      Hello, {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "no name",
};

export default Hello;
