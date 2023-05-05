import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  



  const AppLoading = () => {
    setIsLoading(true);
    fetchMovieHandler();
  };

  const fetchMovieHandler = useCallback( async()  => {
    setError(null);
    try {
      const response = await fetch(
        "https://movies-503c7-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong.... Retrying");
      }

      const data = await response.json();
      console.log(data)

      const loadedMovies = []

      for (const key in data) {
        loadedMovies.push({
          id : key,
          title : data[key].title,
          openingText : data[key].openingText,
          releaseDate : data[key].releaseDate
        })
      }
      
      setMovies(loadedMovies);
      
    } catch (error) {
      setError(error.message);  
    }
    setIsLoading(false);
  }, [])

useEffect(() => {
  fetchMovieHandler();
}, [fetchMovieHandler]);

async function addMovieHandler(movie) {
  const response = await fetch(
    "https://movies-503c7-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json" , {
      method : 'POST',
      body : JSON.stringify(movie),
      headers : {
        'Content-Type' : 'application/json'
      }
    }
  );

  const data = await response.json()
  console.log(data)
} 


async function deleteMovieHandler(id) {
  console.log('received id is', id)
  const response = await fetch(
    `https://movies-503c7-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`, {
      method : 'DELETE'
    });

    setMovies((prev) => {
      const updatedMovies = prev.filter((movie) => movie.id !== id)
      return updatedMovies
    })

}

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={AppLoading}>Fetch Movies</button>
      </section>
      <section>
        {isLoading ? <p>Loading..!!</p> : <MoviesList onDelete={deleteMovieHandler} movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
