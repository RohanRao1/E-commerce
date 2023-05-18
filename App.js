import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Store from "./components/navigations/Store";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartContextProvider";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./components/navigations/About";
import Home from "./components/navigations/Home";
import ContactUs from "./components/navigations/ContactUs";
import ProductDetails from "./components/products/ProductDetails";
import Login from "./components/auth/Login";

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
      <header>
        {cartShown && <Cart onHideCart={HideCartHandler} />}
        <Header onClick={showCartHandler} />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/store" exact>
            <Store onClick={showCartHandler} />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/store/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
      {/* <ProductsList onClick={showCartHandler} /> */}
      <Footer />
    </CartProvider>
  );
}

export default App;
