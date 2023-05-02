import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import ProductsList from "./components/products/ProductsList";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartContextProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const HideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={HideCartHandler} />}
      <Header onClick={showCartHandler} />
      <ProductsList onClick={showCartHandler} />
      <Footer />
    </CartProvider>
  );
}

export default App;
