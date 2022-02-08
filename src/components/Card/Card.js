import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  return (
    <div key={props.product.id} className="card">
      <div className="card-container">
        <Link to={`/${props.product.slug}`} className="card-container-top">
          <img
            className="card-container-top-image"
            src={props.product.images[0]}
          />
        </Link>
        <div className="card-container-bottom">
          <p className="card-container-bottom-product">{props.product.name}</p>
          <div className="card-container-bottom-rating">
            <div className="card-container-bottom-rating-box">
              <p className="card-container-bottom-rating-box-number">
                {props.product.ratingReviews.avg_rating}
              </p>
              <span className="card-container-bottom-rating-box-icon">
                &#9733;
              </span>
            </div>
            <span className="card-container-bottom-rating-count">
              &#40;{props.product.ratingReviews.rating}&#41;
            </span>
            {props.product.assured && (
              <img
                className="card-container-bottom-rating-assure"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              />
            )}
          </div>
          <div className="card-container-bottom-price">
            <span className="card-container-bottom-price-current">
              &#8377;
              {Math.floor(
                (props.product.price / props.product.discount) * 100
              ) - props.product.price}
            </span>
            <span className="card-container-bottom-price-actual">
              &#8377;{props.product.price}
            </span>
            <span className="card-container-bottom-price-discount">
              {props.product.discount}% off
            </span>
          </div>
          {props.product.offers.length && (
            <span className="card-container-bottom-offer">Bank Offer</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
