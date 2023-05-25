import axios from "axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  /* console.log(movies); */
  return (
    <>
      <h2 className="text-brand font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((movie, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
