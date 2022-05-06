import React, { useState } from "react";
import "./SideBar.scss";
const SideBar = () => {
  const [isShown, setIsShown] = useState({
    brand: false,
    rating: false,
    offer: false,
  });
  const [filter, setFilter] = useState([]);
  const handleChange = (e) => {
    setFilter([...filter, e.target.value]);
  };
  const removeFilter = (index) => {
    const data = filter.filter((item, ind) => {
      return ind != index;
    });
    setFilter([...data]);
  };
  const filterBox = filter.map((item, index) => {
    return (
      <div className="filter" on onClick={() => removeFilter(index)}>
        <span className="filter-icon">X</span>
        <p className="filter-text">{item}</p>
      </div>
    );
  });
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-container-filter">
          <div className="sidebar-container-filter-top">
            <p className="sidebar-container-filter-top-text">filters</p>
            {filter.length > 0 ? (
              <span
                onClick={() => setFilter([])}
                className="sidebar-container-filter-top-clear"
              >
                CLEAR ALL
              </span>
            ) : null}
          </div>
          <div className="sidebar-container-filter-type">{filterBox}</div>
        </div>
        <div className="sidebar-container-category">
          <p className="sidebar-container-category-text">CATEGORIES</p>
        </div>
        <div
          onClick={() => {
            isShown.brand = !isShown.brand;
            setIsShown({ ...isShown });
          }}
          className="sidebar-container-brands"
        >
          <div className="sidebar-container-brands-box">
            <p className="sidebar-container-brands-box-text">Brands</p>
            {isShown.brand ? (
              <span className="sidebar-container-brands-box-icon">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
              </span>
            ) : (
              <span className="sidebar-container-brands-box-icon">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            )}
          </div>
          {isShown.brand && (
            <ul className="sidebar-container-brands-list">
              {["Biqil", "VPrime", "Clasikcart", "A-Allin1"].map(
                (item, index) => {
                  return (
                    <li
                      key={index}
                      className="sidebar-container-brands-list-option"
                    >
                      <input
                        value={item}
                        onChange={handleChange}
                        className="sidebar-container-brands-list-option-input"
                        type="checkbox"
                      />
                      <p className="sidebar-container-brands-list-option-text">
                        {item}
                      </p>
                    </li>
                  );
                }
              )}
            </ul>
          )}
        </div>
        <div
          onClick={() => {
            isShown.rating = !isShown.rating;
            setIsShown({ ...isShown });
          }}
          className="sidebar-container-rating"
        >
          <div className="sidebar-container-rating-box">
            <p className="sidebar-container-rating-box-text">
              CUSTOMER RATINGS
            </p>
            {isShown.rating ? (
              <span className="sidebar-container-rating-box-icon">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
              </span>
            ) : (
              <span className="sidebar-container-rating-box-icon" s>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            )}
          </div>

          {isShown.rating && (
            <ul className="sidebar-container-rating-list">
              <li className="sidebar-container-rating-list-option">
                <input
                  value="4&#9733; &#38; above"
                  onChange={handleChange}
                  className="sidebar-container-rating-list-option-input"
                  type="checkbox"
                />
                <p className="sidebar-container-rating-list-option-text">
                  4&#9733; &#38; above
                </p>
              </li>
              <li className="sidebar-container-rating-list-option">
                <input
                  value="3&#9733; &#38; above"
                  onChange={handleChange}
                  className="sidebar-container-rating-list-option-input"
                  type="checkbox"
                />
                <p className="sidebar-container-rating-list-option-text">
                  3&#9733; &#38; above
                </p>
              </li>
              <li className="sidebar-container-rating-list-option">
                <input
                  value="2&#9733; &#38; above"
                  onChange={handleChange}
                  className="sidebar-container-rating-list-option-input"
                  type="checkbox"
                />
                <p className="sidebar-container-rating-list-option-text">
                  2&#9733; &#38; above
                </p>
              </li>
              <li className="sidebar-container-rating-list-option">
                <input
                  value="1&#9733; &#38; above"
                  onChange={handleChange}
                  className="sidebar-container-rating-list-option-input"
                  type="checkbox"
                />
                <p className="sidebar-container-rating-list-option-text">
                  1&#9733; &#38; above
                </p>
              </li>
            </ul>
          )}
        </div>
        <div
          onClick={() => {
            isShown.offer = !isShown.offer;
            setIsShown({ ...isShown });
          }}
          className="sidebar-container-offer"
        >
          <div className="sidebar-container-offer-box">
            <p className="sidebar-container-offer-box-text">OFFERS</p>
            {isShown.offer ? (
              <span className="sidebar-container-offer-box-icon">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
              </span>
            ) : (
              <span className="sidebar-container-offer-box-icon" s>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            )}
          </div>
          {isShown.offer && (
            <ul className="sidebar-container-offer-list">
              <li className="sidebar-container-offer-list-option">
                <input
                  value="Buy More, Save More"
                  onChange={handleChange}
                  className="sidebar-container-offer-list-option-input"
                  type="checkbox"
                />
                <p className="sidebar-container-offer-list-option-text">
                  Buy More, Save More
                </p>
              </li>
              <li className="sidebar-container-offer-list-option">
                <input
                  value="No Cost EMI"
                  onChange={handleChange}
                  className="sidebar-container-offer-list-option-input"
                  type="checkbox"
                />
                <p className="sidebar-container-offer-list-option-text">
                  No Cost EMI
                </p>
              </li>
              <li className="sidebar-container-offer-list-option">
                <input
                  value="Special Price"
                  onChange={handleChange}
                  className="sidebar-container-offer-list-option-input"
                  type="checkbox"
                />
                <p className="sidebar-container-offer-list-option-text">
                  Special Price
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
