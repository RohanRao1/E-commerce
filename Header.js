import React, { useContext, useEffect } from "react";
import classes from "./Header.module.css";
import CartContext from "../../store/cartContext";
import { NavLink, useHistory } from "react-router-dom";
import "../../App.css";
import AuthContext from "../auth/AuthContext";

const Header = (props) => {
  // const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const isLoggedIn = !!authCtx.token

  const totnum = authCtx.items.reduce((num, item) => {
    return num + item.quantity;
  }, 0);

  const logoutHandler = () => {
    authCtx.logout()
    history.replace('/Login')

  }
let userEmail 
 if(!!authCtx.token){
   userEmail = authCtx.email.replace(/[@.]/g, "");
 }

  async function getItems() {
    const response = await fetch(
      `https://crudcrud.com/api/67d838fa42ed47348a90ceee10289616/cart${userEmail}`
    );
    const data = await response.json();
    data.map((item) => {
      return authCtx.addToCart({ ...item });
    });
  }

  useEffect(() => {
    getItems();
  }, [userEmail]);


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
          {!isLoggedIn && <button>
            <NavLink to="/login">LOGIN</NavLink>
          </button>}
          {isLoggedIn && <button onClick={logoutHandler}>
            LOGOUT
          </button>}
          { <div className={classes.cart}>
            <button onClick={props.onClick}>Cart</button>
            <span>{totnum}</span>
          </div> }
        </div>
        <h1>The Generics</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
