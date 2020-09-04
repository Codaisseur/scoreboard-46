import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const params = useParams();
  const history = useHistory();
  // console.log("url params", params); // { textToSearch: undefined || "matrix" }

  useEffect(() => {
    console.log("im running!");
    const doSearch = async () => {
      const queryParam = encodeURIComponent(params.textToSearch);
      const response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=f0d0fe5&s=${queryParam}`
      );
      console.log(response.data);
      // do axios call - DONE
      // set response to state
      setMovies(response.data.Search);
    };
    if (params.textToSearch) {
      doSearch();
    }
  }, [params.textToSearch]);

  const setSearchUrl = async e => {
    e.preventDefault();
    const parsedTerm = encodeURIComponent(searchTerm);
    history.push(`/discover/${parsedTerm}`);
  };

  return (
    <div>
      <form onSubmit={setSearchUrl}>
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
