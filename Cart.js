import React from "react";
import classes from "./Cart.module.css";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];


const Cart = (props) => {
  return (
    <div>
      {
        <div className={classes.cart}>
          <h2>CART</h2>
          <button onClick={props.onHideCart} className={classes.cancel}>
            X
          </button>
          <div className={classes.heading}>
            <span className={classes.first}>ITEM</span>
            <span className={classes.second}>PRICE</span>
            <span className={classes.third}>QUANTITY</span>
          </div>
          <div>
            {cartElements.map((prod) => (
              <div style={{ listStyle: "none" }}>
                <div className={classes.product}>
                  <div className={classes.prodrow}>
                    <span className={classes.item}>
                      <img src={prod.imageUrl} alt={prod.title} />
                      <span>{prod.title}</span>
                    </span>
                    <span className={classes.price}>{prod.price}</span>
                    <span className={classes.qty}>
                      <span>{prod.quantity}</span>
                      <button>REMOVE</button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.tot}>
            <h1>Total</h1>
            <span>Rs. 220</span>
          </div>
          <div className={classes.purchase}>
            <button>PURCHASE</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Cart;
