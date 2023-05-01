import React from "react";
import classes from './BottomCartButton.module.css'

const BottomCartButton = props => {
    return (
      <button className={classes.button} onClick={props.onClick}>
        See the Cart
      </button>
    );
}

export default BottomCartButton