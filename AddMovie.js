import React, {useRef} from "react";
import classes from './AddMovie.module.css'


const AddMovie = (props) => {
    const titleInputref = useRef()
    const textInputRef = useRef()
    const dateInputRef = useRef()



    const submitHandler = (event) => {
        event.preventDefault()
        const enteredTitle = titleInputref.current.value
        const enteredText = textInputRef.current.value
        const enteredDate = dateInputRef.current.value

        const movie = {
            title : enteredTitle,
            openingText : enteredText,
            releaseDate : enteredDate
        }

        props.onAddMovie(movie)

        titleInputref.current.value = ''
        textInputRef.current.value = ''
        dateInputRef.current.value = ''
    }

    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" id="text" ref={titleInputref}/>
          <label>Opening Text</label>
          <textarea type="text" id="desc" className={classes.text} ref={textInputRef}  />
        <label>Date</label>
        <input type="date" id="date" ref={dateInputRef} />
        <button>Add Movie</button>
      </form>
    );
}

export default AddMovie