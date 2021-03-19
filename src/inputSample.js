import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        ref={nameInput}
        onChange={onChange}
        value={name}
        placeholder="name"
      />
      <input
        name="nickname"
        onChange={onChange}
        value={nickname}
        placeholder="nickname"
      />
      <button onClick={onReset}>reset</button>
      <div>
        <b>value: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
