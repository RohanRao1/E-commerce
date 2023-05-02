import React from "react";
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
    console.log('backdrop')
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

export default Backdrop 