import {
  Breadcrumbs,
  ListItemSecondaryAction,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Product.scss";
import { addToCart } from "../redux/actions/productAction";

const Product = () => {
  const [currentImage, setCurrentImage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const data = useSelector((state) => state.products);
  const product = data.products.filter((item) => {
    return item.slug === slug;
  });
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      //   onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
      //   onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  const addCart = () => {
    dispatch(addToCart(product[0]));
    navigate("/cart");
  };
  return (
    <div className="product">
      <NavBar />
      <div className="product-container">
        <div className="product-container-top">
          <div className="product-container-top-left">
            <div className="product-container-top-left-images">
              <ul className="product-container-top-left-images-small">
                <li className="product-container-top-left-images-small-box">
                  <img
                    className="product-container-top-left-images-small-box-image"
                    src={product[0].images[0]}
                  />
                </li>
                <li className="product-container-top-left-images-small-box">
                  <img
                    className="product-container-top-left-images-small-box-image"
                    src={product[0].images[0]}
                  />
                </li>
                <li className="product-container-top-left-images-small-box">
                  <img
                    className="product-container-top-left-images-small-box-image"
                    src={product[0].images[0]}
                  />
                </li>
                <li className="product-container-top-left-images-small-box">
                  <img
                    className="product-container-top-left-images-small-box-image"
                    src={product[0].images[0]}
                  />
                </li>
                <li className="product-container-top-left-images-small-box">
                  <img
                    className="product-container-top-left-images-small-box-image"
                    src={product[0].images[0]}
                  />
                </li>
              </ul>
              <div className="product-container-top-left-images-large">
                <img
                  className="product-container-top-left-images-large-image"
                  src={product[0].images[0]}
                />
              </div>
            </div>
            <div className="product-container-top-left-button">
              <button
                onClick={addCart}
                className="product-container-top-left-button-cart"
              >
                <i class="fas fa-shopping-cart"></i> ADD TO CART
              </button>
              <button className="product-container-top-left-button-buy">
                BUY NOW
              </button>
            </div>
          </div>
          <div className="product-container-top-right">
            <div className="product-container-top-right-breadcrumb">hello</div>
            <div className="product-container-top-right-info">
              <span className="product-container-top-right-info-name">
                {product[0].name}
              </span>
              <div className="product-container-top-right-info-prices">
                <span className="product-container-top-right-info-prices-rating">
                  {product[0].ratingReviews.avg_rating}&#9733;
                </span>
                <span className="product-container-top-right-info-prices-review">
                  {product[0].ratingReviews.rating} Ratings &{" "}
                  {product[0].ratingReviews.reviews} Reviews
                </span>
                {product[0].assured && (
                  <img
                    className="product-container-top-right-info-prices-assure"
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  />
                )}
              </div>
              {product[0].specialPrice && (
                <span className="product-container-top-right-info-special">
                  Special price
                </span>
              )}
              <div className="product-container-top-right-info-rate">
                <span className="product-container-top-right-info-rate-price">
                  &#8377;
                  {Math.floor(
                    (product[0].price * 100) / product[0].discount -
                      product[0].price
                  )}
                </span>
                <span className="product-container-top-right-info-rate-actual">
                  &#8377;{product[0].price}
                </span>
                <span className="product-container-top-right-info-rate-discount">
                  {product[0].discount}% off
                </span>
              </div>
            </div>
            <div className="product-container-top-right-offer">
              <span className="product-container-top-right-offer-head">
                Available offers
              </span>
              {product[0].offers.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="product-container-top-right-offer-details"
                  >
                    <img
                      src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                      className="product-container-top-right-offer-details-icon"
                    />
                    <span className="product-container-top-right-offer-details-type">
                      {item.offerType}
                    </span>
                    <span className="product-container-top-right-offer-details-desc">
                      {item.description}
                    </span>
                  </div>
                );
              })}
            </div>
            <ul className="product-container-top-right-details">
              <li className="product-container-top-right-details-desc">
                <span className="product-container-top-right-details-desc-title">
                  Services
                </span>
                <ul className="product-container-top-right-details-desc-text">
                  <li className="product-container-top-right-details-desc-text-1">
                    {product[0].services.paymentType}
                  </li>
                  <li className="product-container-top-right-details-desc-text-2">
                    {product[0].services.warranty}
                  </li>
                </ul>
              </li>

              <li className="product-container-top-right-details-desc">
                <span className="product-container-top-right-details-desc-title">
                  Seller
                </span>
                <ul className="product-container-top-right-details-desc-text">
                  <li className="product-container-top-right-details-desc-text-1">
                    {product[0].seller[0].name}{" "}
                    <span className="product-container-top-right-details-desc-text-1-rating">
                      {product[0].seller[0].rating}&#9733;
                    </span>
                  </li>
                  {product[0].seller[0].returns && (
                    <li className="product-container-top-right-details-desc-text-2">
                      No Returns Applicable
                    </li>
                  )}
                </ul>
              </li>
              <li className="product-container-top-right-details-desc">
                <span className="product-container-top-right-details-desc-title">
                  Description
                </span>
                <ul className="product-container-top-right-details-desc-text">
                  <li className="product-container-top-right-details-desc-text-2">
                    {product[0].description}
                  </li>
                </ul>
              </li>
            </ul>
            <div className="product-container-top-right-spec">
              <div className="product-container-top-right-spec-head">
                Specifications
              </div>
              <div className="product-container-top-right-spec-box">
                <div className="product-container-top-right-spec-box-title">
                  In The Box
                </div>
                <table className="product-container-top-right-spec-box-table">
                  <tbody>
                    <tr className="product-container-top-right-spec-box-table-row">
                      <td className="product-container-top-right-spec-box-table-row-left">
                        Sales Package
                      </td>
                      <td className="product-container-top-right-spec-box-table-row-right">
                        {
                          product[0].specifications.attributes[0].inTheBox
                            .salesPackage
                        }
                      </td>
                    </tr>
                    <tr className="product-container-top-right-spec-box-table-row">
                      <td className="product-container-top-right-spec-box-table-row-left">
                        Pack of
                      </td>
                      <td className="product-container-top-right-spec-box-table-row-right">
                        {
                          product[0].specifications.attributes[0].inTheBox
                            .packOf
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product-container-top-right-spec-box">
                <div className="product-container-top-right-spec-box-title">
                  General
                </div>
                <table className="product-container-top-right-spec-box-table">
                  <tbody>
                    <tr className="product-container-top-right-spec-box-table-row">
                      <td className="product-container-top-right-spec-box-table-row-left">
                        Brand
                      </td>
                      <td className="product-container-top-right-spec-box-table-row-right">
                        {product[0].specifications.attributes[1].general.brand}
                      </td>
                    </tr>
                    <tr className="product-container-top-right-spec-box-table-row">
                      <td className="product-container-top-right-spec-box-table-row-left">
                        Suitable For
                      </td>
                      <td className="product-container-top-right-spec-box-table-row-right">
                        {
                          product[0].specifications.attributes[1].general
                            .suitableFor
                        }
                      </td>
                    </tr>
                    <tr className="product-container-top-right-spec-box-table-row">
                      <td className="product-container-top-right-spec-box-table-row-left">
                        Applied on
                      </td>
                      <td className="product-container-top-right-spec-box-table-row-right">
                        {
                          product[0].specifications.attributes[1].general
                            .appliedOn
                        }
                      </td>
                    </tr>
                    <tr className="product-container-top-right-spec-box-table-row">
                      <td className="product-container-top-right-spec-box-table-row-left">
                        Removable
                      </td>
                      <td className="product-container-top-right-spec-box-table-row-right">
                        {
                          product[0].specifications.attributes[1].general
                            .removable
                        }
                      </td>
                    </tr>
                    <tr className="product-container-top-right-spec-box-table-row">
                      <td className="product-container-top-right-spec-box-table-row-left">
                        Color
                      </td>
                      <td className="product-container-top-right-spec-box-table-row-right">
                        {product[0].specifications.attributes[1].general.color}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {product[0].specifications.attributes[2].dimensions && (
                <div className="product-container-top-right-spec-box">
                  <div className="product-container-top-right-spec-box-title">
                    Dimensions
                  </div>
                  <table className="product-container-top-right-spec-box-table">
                    <tbody>
                      <tr className="product-container-top-right-spec-box-table-row">
                        <td className="product-container-top-right-spec-box-table-row-left">
                          Height
                        </td>
                        <td className="product-container-top-right-spec-box-table-row-right">
                          {
                            product[0].specifications.attributes[2].dimensions
                              .height
                          }
                        </td>
                      </tr>
                      <tr className="product-container-top-right-spec-box-table-row">
                        <td className="product-container-top-right-spec-box-table-row-left">
                          Width
                        </td>
                        <td className="product-container-top-right-spec-box-table-row-right">
                          {
                            product[0].specifications.attributes[2].dimensions
                              .width
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
