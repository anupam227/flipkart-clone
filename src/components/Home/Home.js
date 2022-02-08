import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";
import { loadProducts } from "../redux/actions/productAction";
import SideBar from "../SideBar/SideBar";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div className="main">
      <NavBar />
      <div className="main-bottom">
        <SideBar />
        <Products />
      </div>
    </div>
  );
};
export default Home;
