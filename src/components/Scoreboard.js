import React, { useState } from "react";
import { Link } from "react-router-dom";
import Player from "./Player";
import AddPlayerForm from "./AddPlayer";

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
    const updatedPlayers = players.map(player => {
      if (player.id === playerId) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    set_players(updatedPlayers);
  }

  const resetOnePlayer = id => {
    console.log("guy to reset", id);
    const updatedPlayers = players.map(p =>
      p.id === id ? { ...p, score: 0 } : p
    );
    set_players(updatedPlayers);
  };

  const compareFunction = sort_by === "score" ? compare_score : compare_name;

  const players_sorted = [...players].sort(compareFunction);

  const change_sorting = event => {
    set_sort_by(event.target.value);
  };

  const resetAllScores = () => {
    const updatedPlayers = players.map(p => {
      return { ...p, score: 0 };
    });
    set_players(updatedPlayers);
  };

  const addPlayerCallback = name => {
    const newGuy = {
      id: players.length + 1,
      name,
      score: 0, // == 0
    };

    const extraPlayerArray = [...players, newGuy];
    set_players(extraPlayerArray);
  };
  console.log(players);
  return (
    <div className='Scoreboard'>
      <Link to='/discover'>To Discover Page</Link>
      <h1>Scoreboard</h1>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value='score'>Sort by score</option>
          <option value='name'>Sort by name</option>
        </select>
      </p>
      <button onClick={resetAllScores}>Resets All Scores</button>
      {players_sorted.map(player => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
            resetOnePlayer={resetOnePlayer}
          />
        );
      })}
      <AddPlayerForm addPlayerCallback={addPlayerCallback} />
    </div>
  );
}
