import React from "react";

export default function Player(props) {
  function handleClick() {
    console.log(`Clicked ${props.name}!`);
    props.incrementScore();
  }

  return (
    <div>
      {props.name} - score: {props.score}
      <button onClick={handleClick}>+</button>
    </div>
  );
}
