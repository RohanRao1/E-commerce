import React, {useContext, useEffect} from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";
import Backdrop from "../UI/Backdrop";
import AuthContext from "../auth/AuthContext";

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];


const Cart = (props) => {
  // const cartCtx = useContext(CartContext)

  // const removeItemHandler = (id) => {
  //     authCtx.removeItem(id)
  // }

 const authCtx = useContext(AuthContext)

//  const userEmail = authCtx.email.replace(/[@.]/g, "");

//  async function getItems(){
//   const response = await fetch(
//     `https://crudcrud.com/api/623ed5b280fc401d83d1e716ec6a7b5c/cart${userEmail}`
//   )
//   const data = await response.json()
//   data.map(item => {
//     return authCtx.addToCart({...item})
//   })
//  }

//  useEffect(() => {
//   getItems()
//  }, [userEmail])


  return (
    <div>
    
      <Backdrop onClick={props.onHideCart} />
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
            {authCtx.items.map((prod) => (
              <div style={{ listStyle: "none" }} key={prod.id}>
                <div className={classes.product}>
                  <div className={classes.prodrow}>
                    <span className={classes.item}>
                      <img src={prod.imageUrl} alt={prod.title} />
                      <span>{prod.title}</span>
                    </span>
                    <span className={classes.price}>{prod.price}</span>
                    <span className={classes.qty}>
                      <span>{prod.quantity}</span>
                      <button >REMOVE</button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.tot}>
            <h1>Total</h1>
            <span>Rs. {authCtx.totalAmount}</span>
          </div>
          <div className={classes.purchase}>
            <button >PURCHASE</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Cart;
