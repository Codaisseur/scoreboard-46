import React, { useState } from "react";
import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  // incrementScore -> callback prop
  function incrementScore(playerId) {
    console.log("I AM A CALLBACK PROP", playerId);
    const updatedPlayers = players.map((player) => {
      console.log("PLAYER:", player);
      if (player.id === playerId) {
        console.log("UPDATE THIS PLAYER");
        // player.score = player.score + 1;
        // return player;
        return { ...player, score: player.score + 1 };
      } else {
        console.log("DONT DO ANYTHING");
        return player;
      }
    });
    console.log("ORIGINAL:", players);
    console.log("UPDATED:", updatedPlayers);
    set_players(updatedPlayers);
  }

  // using a callback prop
  // function -> has access to setPlayer -> pass down as a prop to Player

  const compareFunction = sort_by === "score" ? compare_score : compare_name;

  const players_sorted = [...players].sort(compareFunction);

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      {players_sorted.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        );
      })}
    </div>
  );
}
