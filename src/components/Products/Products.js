import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import "./Products.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Products = () => {
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.products);
  const [productData, setProductData] = useState([]);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const list = data.products.slice(0, 12);
    setProductData([...list]);
  }, []);
  const handleClick = () => {};
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  return (
    <div className="products">
      <div className="products-container">
        <div className="products-container-section1">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <div className="products-container-section1-text">
            <span className="products-container-section1-text-text1">
              Mobile Camera Lens Protectors
            </span>
            <span className="products-container-section1-text-text2">
              (Showing 1 – 40 products of 52,164 products)
            </span>
          </div>
        </div>
        <div className="products-container-section2">
          {[...data.products.slice((page - 1) * 12, page * 12)].map((item) => {
            return <Card key={item.id} product={item} />;
          })}
        </div>
        <div className="products-container-section3">
          <span className="products-container-section3-text">
            Page {page} of 10
          </span>
          <Pagination
            hidePrevButton
            hideNextButton
            count={10}
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
export default Products;
