import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const delteHandler = async () => {
    try {
      const response = await fetch(
        `https://movies-503c7-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${props.id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      console.log('deleted id is',props.id)
      props.onDelete(props.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={delteHandler}>Delete</button>
    </li>
  );
};

export default Movie;
