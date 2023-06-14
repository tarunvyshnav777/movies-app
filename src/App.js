import React, { useEffect, useState } from "react";
import "./App.css";
// import tarun from "./tarun.gif";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// ecebea98
// const API_URl = "http://www.omdbapi.com/?apikey=ecebea98";
// const API_URl = "http://www.omdbapi.com/?apikey=ecebea98";
const API_URl = "https://www.omdbapi.com/?t=kabhi&apikey=ecebea98";
// const movie1 = {
//   Title: "RRR",
//   Year: "2022",
//   imdbID: "tt8178634",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
// };
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Titanic");
  }, []);

  return (
    <div className="app">
      <h1>Watch Movies</h1>
      <div className="search">
        <input
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          {/* <img src={tarun} alt="No Movies Found"></img> */}
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
