/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="inner">
        {movies.map(
          (movie) =>
          ((isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.backdrop_path)) && (
              <img
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              } `}
              alt={movie.title}
            />
            )
          )}
      </div>
    </div>
  );
};

export default Row;
