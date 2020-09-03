import React, { useState } from "react";

const AddPlayer = props => {
  //console.log("form props", props); // props.newPlayer(name)
  const [name, setName] = useState("");

  // const onFieldChange = event => {
  //   //console.log("im typing!", event.target.value);
  //   setName(event.target.value);
  // };

  const submitForm = event => {
    event.preventDefault();
    console.log("name on submit", name);
    props.newPlayer(name);
    setName("");
  };

  // console.log("name state!", name);

  return (
    <div style={{ marginTop: 20 }}>
      <form onSubmit={submitForm}>
        <input
          style={{ marginRight: 15 }}
          onChange={event => setName(event.target.value)}
          name='name'
          value={name}
        />
        <button type='submit'>Add Player</button>
      </form>
    </div>
  );
};

export default AddPlayer;
