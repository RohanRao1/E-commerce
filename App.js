import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const AppLoading = () => {
    setIsLoading(true);
    fetchMovieHandler();
  };

  async function fetchMovieHandler() {
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong.... Retrying");
      }

      const data = await response.json();

      
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releasedate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      
    } catch (error) {
      setError(error.message);  
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={AppLoading}>Fetch Movies</button>
      </section>
      <section>
        {isLoading ? <p>Loading..!!</p> : <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
