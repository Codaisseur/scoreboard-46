import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getMovieById = async () => {
      const movieId = params.movieId;
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=f0d0fe5&i=${movieId}`
      );
      console.log(response.data);
      setMovie(response.data);
    };

    getMovieById();
  }, [params.movieId]);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.Title}</h2>
          <h2>{movie.Actors}</h2>
          <h2>{movie.Year}</h2>
          <h2>{movie.Director}</h2>
          <h2>{movie.Genre}</h2>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DetailsPage;
