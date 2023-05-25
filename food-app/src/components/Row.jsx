import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  /* console.log(movies); */
  //scroll
  const sliderLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 500;
  };
  return (
    <>
      <h2 className="text-brand font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-secondary-300 rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden left-0 group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-secondary-300 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
