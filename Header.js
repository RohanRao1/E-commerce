import React, { useContext } from "react";
import classes from "./Header.module.css";
import CartContext from "../../store/cartContext";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const totnum = cartCtx.items.reduce((num, item) => {
    return num + item.quantity;
  }, 0);

  return (
    <React.Fragment>
      <header className={classes.fullheader}>
        <div className={classes.header}>
          <button>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              HOME
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/store"
              style={{ textDecoration: "none", color: "white" }}
            >
              STORE
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              ABOUT
            </NavLink>
          </button>
          <div className={classes.cart}>
            <button onClick={props.onClick}>Cart</button>
            <span>{totnum}</span>
          </div>
        </div>
        <h1>The Generics</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
