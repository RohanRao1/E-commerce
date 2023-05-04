import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

   function fetchMovieHandler () {
    fetch('https://swapi.dev/api/films/')
    .then(Response => {
      return Response.json()
    }).then(data => {
      const transformedMovies = data.results.map(movieData => {
        return {
          id : movieData.episode_id,
          title : movieData.title,
          openingText : movieData.opening_crawl,
          releasedate : movieData.release_date
        }
      })
      setMovies(transformedMovies)
    })
   }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
