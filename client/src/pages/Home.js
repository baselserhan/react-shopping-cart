import React from "react";
import Products from "../components/Products/Products";
import Filter from "../components/Filter/Filter";
import Cart from "../components/Cart/Cart";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Products />
        <Filter />
      </div>
      <Cart />
    </>
  );
}

export default Home;
