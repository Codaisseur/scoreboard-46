import React, { useState } from "react";

const AddPlayer = ({ addPlayerCallback }) => {
  const [name, setName] = useState("");

  const onNameChange = event => {
    setName(event.target.value);
  };

  const addClicked = () => {
    // ADD A PLAYER SOMEHOW
    addPlayerCallback(name);
  };

  return (
    <div>
      <input value={name} onChange={onNameChange} />
      <button onClick={addClicked}>Add</button>
    </div>
  );
};

export default AddPlayer;
