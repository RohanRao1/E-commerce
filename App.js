import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import ProductsList from "./components/products/ProductsList";





function App() {
  return (
    <React.Fragment>
      <Header />
      <ProductsList  />
    </React.Fragment>
  );
}

export default App;
