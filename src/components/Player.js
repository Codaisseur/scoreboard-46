import React from "react";

export default function Player(props) {
  console.log("PLAYER PROPS:", props);
  return (
    <div>
      {props.name} - score: {props.score}
    </div>
  );
}
