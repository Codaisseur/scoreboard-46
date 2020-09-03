import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const params = useParams();

  console.log("url", params);
  const onSearchClick = async e => {
    // console.log("hey!");
    e.preventDefault();
    const queryParam = encodeURIComponent(searchTerm);
    // console.log("my query param", queryParam);
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=f0d0fe5&s=${queryParam}`
    );
    // console.log("data", response.data.Search);
    setMovies(response.data.Search);
    history.push(`/discover/${queryParam}`);
  };

  console.log("my data", movies);
  return (
    <div>
      <form onSubmit={onSearchClick}>
        <input
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button type='submit'>Search</button>
        {movies.map(m => (
          <div>
            <h2 key={m.imdbID}>{m.Title}</h2>
            <Link to={`/details/${m.imdbID}`}>See Details</Link>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Discover;

//const data = await axios.get(http://www.omdbapi.com/?i=tt3896198&apikey=f0d0fe5&s=${queryParam});
