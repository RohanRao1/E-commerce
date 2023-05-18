import React, { useContext } from "react";
import classes from "./Header.module.css";
import CartContext from "../../store/cartContext";
import { NavLink, useHistory } from "react-router-dom";
import "../../App.css";
import AuthContext from "../auth/AuthContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const isLoggedIn = authCtx.isLoggedIn

  const totnum = cartCtx.items.reduce((num, item) => {
    return num + item.quantity;
  }, 0);

  const logoutHandler = () => {
    authCtx.logout()
    history.replace('/Login')
  }

  return (
    <React.Fragment>
      <header className={classes.fullheader}>
        <div className={classes.header}>
          <button>
            <NavLink to="/home">HOME</NavLink>
          </button>
          <button>
            <NavLink to="/store">STORE</NavLink>
          </button>
          <button>
            <NavLink to="/about">ABOUT</NavLink>
          </button>

          <button>
            <NavLink to="/contactus">ContactUS</NavLink>
          </button>
          <button>
            <NavLink to="/login">LOGIN</NavLink>
          </button>
          {isLoggedIn && <button onClick={logoutHandler}>
            LOGOUT
          </button>}
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
