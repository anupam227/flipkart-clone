import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:slug" element={<Product />} />
      </Routes>
    </Router>
  );
};
export default Routing;
