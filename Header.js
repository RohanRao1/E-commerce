import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.fullheader}>
        <div className={classes.header}>
          <button>HOME</button>
          <button>STORE</button>
          <button>ABOUT</button>
        <div className={classes.cart}>
            <button>Cart</button>
            <span>0</span>
        </div>
        </div>
        <h1>The Generics</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
