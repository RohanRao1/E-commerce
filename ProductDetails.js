import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from './ProductDetails.module.css'
import CartContext from "../../store/cartContext";


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




const ProductDetails = () => {
    const params = useParams()
    console.log(params)

    const cartCtx = useContext(CartContext)

    const addItemToCart = product => {
        cartCtx.addItem(product)
    }
    
    const product = productsArr.find((prod) => prod.id === +params.productId)

    return (
      <Container style={{ marginTop: "30px", textAlign: "center" }}>
        <div>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className={classes.detail}>
            <span>Price:  ${product.price}</span>
            <button onClick = {() => addItemToCart(product)}>Add To Cart</button>
        </div>
      </Container>
    );
}

export default ProductDetails 