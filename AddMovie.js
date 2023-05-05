import React, {useRef} from "react";
import classes from './AddMovie.module.css'


const AddMovie = () => {
    const titleInputref = useRef()
    const textInputRef = useRef()
    const dateInputRef = useRef()



    const submitHandler = (event) => {
        event.preventDefault()
        const enteredTitle = titleInputref.current.value
        const enteredText = textInputRef.current.value
        const enteredDate = dateInputRef.current.value

        const NewMovieObj = {
            title : enteredTitle,
            text : enteredText,
            date : enteredDate
        }

        console.log(NewMovieObj)
        titleInputref.current.value = ''
        textInputRef.current.value = ''
        dateInputRef.current.value = ''
    }

    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" id="text" ref={titleInputref}/>
          <label>Opening Text</label>
          <input type="text" id="desc" className={classes.text} ref={textInputRef} style={{height : '80px'}} />
        <label>Date</label>
        <input type="date" id="date" ref={dateInputRef} />
        <button>Add Movie</button>
      </form>
    );
}

export default AddMovie