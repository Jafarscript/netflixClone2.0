/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  // const baseURL = "https://image.tmdb.org/t/p/original/";
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

      {/*  eslint-disable-next-line array-callback-return */}
     {movies.map((moviesArray) => {
      <div key={moviesArray.id}>
        <h2>{moviesArray.title}</h2>
        {/* {moviesArray.map((movie, innerIndex) => {
          <h2 key={movie.id}>{movie.title}</h2>
        })} */}
      </div>
     })}
    </div>
  );
};

export default Row;

