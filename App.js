import React, { useState, useContext } from "react";
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
import AuthContext from "./components/auth/AuthContext";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const authCtx = useContext(AuthContext)

  const isLoggedIn = authCtx.isLoggedIn


  const showCartHandler = () => {
    setCartShown(true);
  };


  const HideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <>
      <header>
        {cartShown && <Cart onHideCart={HideCartHandler} />}
        <Header onClick={showCartHandler} />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/store" exact> 
          {!!authCtx.token  &&  <Store onClick={showCartHandler} /> }
          {!!!authCtx.token && <Redirect to='/login' />}
          </Route> 
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          {!authCtx.token && <Route path="/store/:productId">
            <ProductDetails />
          </Route> }
          <Route path='*'>Page Not Found</Route>
        </Switch>
      </main>
      {/* <ProductsList onClick={showCartHandler} /> */}
      <Footer />
    </>
  );
}

export default App;
