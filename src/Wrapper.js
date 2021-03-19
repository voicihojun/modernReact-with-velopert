import React from "react";

function Wrapper(props) {
  const style = {
    border: "2px solid pink",
    padding: "16px",
  };

  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
