import React from "react";

export default function Player(props) {
  function handleClick() {
    // console.log(`Clicked ${props.name}!`);
    props.incrementScore(props.id);
  }
  const { name: fullName, score, id, resetOnePlayer } = props;
  return (
    <div>
      {fullName} - score: {score}
      <button onClick={handleClick}>+</button>
      <button onClick={() => resetOnePlayer(id)}>Reset</button>
    </div>
  );
}
