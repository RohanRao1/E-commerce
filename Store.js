import React, {useContext} from "react";
import { Container } from "react-bootstrap";
import classes from "./Store.module.css";
import BottomCartButton from "../layout/BottomCartButton";
// import DisplayProductList from "./DisplayProductList";
import CartContext from "../../store/cartContext";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Store = (props) => {
  const authCtx = useContext(AuthContext)
  const userEmail = authCtx.email.replace(/[@.]/g, "");

  // const cartCtx = useContext(CartContext)

  const addItemHandler = item => {
    authCtx.addToCart({...item, quantity : 1})


    fetch(
      `https://crudcrud.com/api/67d838fa42ed47348a90ceee10289616/cart${userEmail}`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(item)
  }

  const history = useHistory()

  const routeChanger = (prod) => {
    console.log(prod)
    history.push(`/store/${prod.id}`);
  }

  
  const product = productsArr.map((prod) => (
    <div key={prod.id} className={classes.products}>
      <div className={classes.list}>
        <h2>{prod.title}</h2>
        <div style={{ margin: "30px" }}>
          <img src={prod.imageUrl} alt={prod.title} />
        </div>
        <div className={classes.pricecart}>
          <span>Price: ${prod.price} </span>
          <button onClick={() => addItemHandler(prod)}>Add To Cart</button>
        </div>
        <button className={classes.detailedbutton} onClick={() => routeChanger(prod)}>Open Product</button>
          {/* <Link to={`/store/${prod.id}`} className={classes.link}>
            Open Product
          </Link> */}
       
      </div>  
    </div>
  ));
  return (
    <Container>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h1 className={classes.cat}>MUSIC</h1>
        <div> {product} </div>
        <BottomCartButton onClick={props.onClick} />
      </div>
    </Container>
  );
};

export default Store;


