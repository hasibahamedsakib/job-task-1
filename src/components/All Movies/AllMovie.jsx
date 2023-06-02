import { useEffect, useState } from "react";
import SingleMovie from "./SingleMovie/SingleMovie";

const AllMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-5">
      <h1 className="text-4xl py-10 text-center my-5 bg-gradient-to-r from-orange-50 to-slate-100">
        All Movies Hear . Total Movies - {movies.length}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 space-y-5">
        {movies.map((movie) => (
          <SingleMovie movie={movie} key={movie.show.id} />
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
