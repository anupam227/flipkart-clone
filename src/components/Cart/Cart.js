import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import "./Cart.scss";
import { loadCart, removeFromCart } from "../redux/actions/productAction";

const Cart = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [rates, setRates] = useState({
    actual: 0,
    discount: 0,
    delivery: 0,
    total: 0,
  });
  useEffect(() => {
    dispatch(loadCart());
  }, []);
  const empty = (
    <div className="empty">
      <div className="empty-container">
        <p className="empty-container-text">My Cart</p>
        <div className="empty-container-box">
          <img
            className="empty-container-box-image"
            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          />
          <p className="empty-container-box-message">Missing Cart items?</p>
          <span className="empty-container-box-text">
            Login to see the items you added previously Login
          </span>
          <button className="empty-container-box-login">Login</button>
        </div>
      </div>
    </div>
  );
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const product = products.cart.map((item, index) => {
    rates.actual += item.price;
    rates.discount +=
      item.price - Math.floor((item.price * 100) / item.discount - item.price);
    rates.delivery += 40;
    if (item.id === products.cart.length - 1) {
      setRates({ ...rates });
    }
    return (
      <div key={index} className="product">
        <div className="product-container">
          <div className="product-container-left">
            <img
              className="product-container-left-image"
              src={item.images[0]}
            />
            <div className="product-container-left-counter">
              <span className="product-container-left-counter-less">-</span>
              <span className="product-container-left-counter-count">1</span>
              <span className="product-container-left-counter-more">+</span>
            </div>
          </div>
          <div className="product-container-right">
            <div className="product-container-right-name">
              <span className="product-container-right-name-text">
                {item.name}
              </span>
              <span className="product-container-right-name-date">
                Delivery by Sat Jan 22 | ₹40
              </span>
            </div>
            <div className="product-container-right-seller">
              Seller:{item.seller[0].name}
              {item.assured && (
                <img
                  className="product-container-right-seller-image"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                />
              )}
            </div>
            <div className="product-container-right-rates">
              <span className="product-container-right-rates-current">
                &#8377;
                {Math.floor((item.price * 100) / item.discount - item.price)}
              </span>
              <span className="product-container-right-rates-actual">
                &#8377;{item.price}
              </span>
              <span className="product-container-right-rates-discount">
                {item.discount}% off
              </span>
              <span className="product-container-right-rates-offer">
                {item.offers.length} offers applied
              </span>
            </div>
            <div className="product-container-right-options">
              <span className="product-container-right-options-one">
                SAVE FOR LATER
              </span>
              <span
                onClick={() => handleRemove(item.id)}
                className="product-container-right-options-second"
              >
                REMOVE
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="cart">
      <NavBar />
      <div className="cart-container">
        {products.cart.length ? (
          <div className="cart-container-box">
            <div className="cart-container-box-items">
              <div className="cart-container-box-items-top">
                <span className="cart-container-box-items-top-text">
                  My Cart &#40;{products.cart.length}&#41;
                </span>
                <div className="cart-container-box-items-top-right">
                  <div className="cart-container-box-items-top-right-delivery">
                    <span className="cart-container-box-items-top-right-delivery-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <span className="cart-container-box-items-top-right-delivery-text">
                      Deliver to
                    </span>
                  </div>
                  <div className="cart-container-box-items-top-right-pin">
                    <input
                      className="cart-container-box-items-top-right-pin-input"
                      type="text"
                      placeholder="Enter delivery pincode"
                    />
                  </div>
                </div>
              </div>
              <div className="cart-container-box-items-products">{product}</div>
              <div className="cart-container-box-items-bottom">
                <button className="cart-container-box-items-bottom-button">
                  PLACE ORDER
                </button>
              </div>
            </div>

            <div className="cart-container-box-amount">
              <div className="cart-container-box-amount-top">
                <span className="cart-container-box-amount-top-text">
                  PRICE DETAILS
                </span>
              </div>
              <div className="cart-container-box-amount-box">
                <div className="cart-container-box-amount-box-cal">
                  <span className="cart-container-box-amount-box-cal-price">
                    Price ({products.cart.length} item)
                  </span>
                  <span className="cart-container-box-amount-box-cal-rate">
                    &#8377;{rates.actual}
                  </span>
                </div>
                <div className="cart-container-box-amount-box-discount">
                  <span className="cart-container-box-amount-box-discount-text">
                    Discount
                  </span>
                  <span className="cart-container-box-amount-box-discount-rate">
                    -&#8377;{rates.discount}
                  </span>
                </div>
                <div className="cart-container-box-amount-box-charges">
                  <span className="cart-container-box-amount-box-charges-text">
                    Delivery Charges
                  </span>
                  <span className="cart-container-box-amount-box-charges-rate">
                    &#8377;{rates.delivery}
                  </span>
                </div>
              </div>
              <div className="cart-container-box-amount-total">
                <span className="cart-container-box-amount-total-text">
                  Total Amount
                </span>
                <span className="cart-container-box-amount-total-rate">
                  &#8377;{rates.actual - rates.discount + rates.delivery}
                </span>
              </div>
              <div className="cart-container-box-amount-save">
                <span className="cart-container-box-amount-save-text">
                  You will save ₹{rates.discount} on this order
                </span>
              </div>
            </div>
          </div>
        ) : (
          empty
        )}
      </div>
    </div>
  );
};
export default Cart;
