import React, { useState } from "react";
import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const players_sorted =
    // first "copy" the array
    [...players]
      // then sort it with the `compare_score` callback function
      .sort(compare_score);

  console.log("SORTED!", players_sorted);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      {players_sorted.map((player) => {
        console.log("PLAYER:", player);

        return (
          <Player id={player.id} name={player.name} score={player.score} />
        );
      })}
    </div>
  );
}
