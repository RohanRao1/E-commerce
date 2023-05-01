import React from "react";
import { Container } from "react-bootstrap";
import classes from "./ProductList.module.css";
import BottomCartButton from "../layout/BottomCartButton";

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

const ProductsList = (props) => {
  const product = productsArr.map((prod) => (
    <div key={prod.id} className={classes.products}>
      <div className={classes.list}>
        <h2>{prod.title}</h2>
        <div style={{ margin: "30px" }}>
          <img src={prod.imageUrl} alt={prod.title} />
        </div>
        <div className={classes.pricecart}>
          <span>Price: ${prod.price}</span>
          <button>Add To Cart</button>
        </div>
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

export default ProductsList;
