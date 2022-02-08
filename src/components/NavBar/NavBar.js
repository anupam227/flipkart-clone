import React, { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  boxShadow: 24,
  // p: 4,
};
const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [users, setUser] = useState({ email: "", password: "" });
  const [user, loading, error] = useAuthState(auth);
  const [signup, setSignup] = useState(false);
  const [signedUp, setSignedUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const moreMenu = (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="moreMenu"
    >
      <div className="moreMenu-container">
        <div className="moreMenu-container-opt">
          <span className="moreMenu-container-opt-icon">
            <i class="fas fa-bell"></i>
          </span>
          <p className="moreMenu-container-opt-text">Notification Preference</p>
        </div>
        <div className="moreMenu-container-opt">
          <span className="moreMenu-container-opt-icon">
            <i class="fas fa-briefcase"></i>
          </span>
          <p className="moreMenu-container-opt-text">Sell on Flipkart</p>
        </div>
        <div className="moreMenu-container-opt">
          <span className="moreMenu-container-opt-icon">
            <i class="fas fa-map-marker-question"></i>
          </span>
          <p className="moreMenu-container-opt-text">24x7 Customer Care</p>
        </div>
        <div className="moreMenu-container-opt">
          <span className="moreMenu-container-opt-icon">
            <i class="fas fa-chart-line"></i>
          </span>
          <p className="moreMenu-container-opt-text">Advertise</p>
        </div>
        <div className="moreMenu-container-opt">
          <span className="moreMenu-container-opt-icon">
            <i class="fas fa-download"></i>
          </span>
          <p className="moreMenu-container-opt-text">Download App</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-left">
          <div className="navbar-container-left-logo">
            <Link to="/" className="navbar-container-left-logo-text">
              Flipcart
            </Link>
          </div>
          <div className="navbar-container-left-searchbar">
            <div className="navbar-container-left-searchbar-box">
              <input
                className="navbar-container-left-searchbar-box-input"
                type="text"
                placeholder="Search for products, brands and more"
              />
              <span className="navbar-container-left-searchbar-box-icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="navbar-container-right">
          {user ? (
            <button onClick={logout} className="navbar-container-right-login">
              Logout
            </button>
          ) : (
            <button
              onClick={handleOpen}
              className="navbar-container-right-login"
            >
              Login
            </button>
          )}
          <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="navbar-container-right-more"
          >
            <p className="navbar-container-right-more-text">More</p>
            <span className="navbar-container-right-more-icon">
              {isShown ? (
                <i class="fa fa-angle-up" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              )}
            </span>
          </div>
          <Link to="/cart" className="navbar-container-right-cart">
            <span className="navbar-container-right-cart-icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
            <p className="navbar-container-right-cart-text">Cart</p>
          </Link>
        </div>
        <div className="navbar-container-right"></div>
      </div>
      {isShown && moreMenu}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="login">
            <div className="login-container">
              <div className="login-container-left">
                <span className="login-container-left-head">Login</span>
                <p className="login-container-left-text">
                  Get access to your Orders, Wishlist and Recommendations
                </p>
              </div>
              <div className="login-container-right">
                {signup ? (
                  <div
                    style={{ width: "100%" }}
                    className="login-container-right-box"
                  >
                    <input
                      className="login-container-right-box-input"
                      type="text"
                      placeholder="Enter Name"
                      value={signedUp.name}
                      name="name"
                      onChange={(e) => {
                        setSignedUp({
                          ...signedUp,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                    <input
                      className="login-container-right-box-input"
                      type="text"
                      placeholder="Enter Email"
                      value={signedUp.email}
                      name="email"
                      onChange={(e) => {
                        setSignedUp({
                          ...signedUp,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                    <input
                      className="login-container-right-box-input"
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        setSignedUp({
                          ...signedUp,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      name="password"
                      value={signedUp.password}
                    />
                    <button
                      onClick={() =>
                        registerWithEmailAndPassword(
                          signedUp.name,
                          signedUp.email,
                          signedUp.password
                        )
                      }
                      className="login-container-right-box-login"
                    >
                      Signup
                    </button>
                  </div>
                ) : (
                  <div className="login-container-right-box">
                    <input
                      className="login-container-right-box-input"
                      type="text"
                      placeholder="Enter Email"
                      value={users.email}
                      name="email"
                      onChange={(e) => {
                        setUser({ ...users, [e.target.name]: e.target.value });
                      }}
                    />
                    <input
                      className="login-container-right-box-input"
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        setUser({ ...users, [e.target.name]: e.target.value });
                      }}
                      name="password"
                      value={users.password}
                    />
                    <p className="login-container-right-box-tnc">
                      By continuing, you agree to Flipkart's Terms of Use and
                      Privacy Policy.
                    </p>
                    <button
                      onClick={() =>
                        logInWithEmailAndPassword(users.email, users.password)
                      }
                      className="login-container-right-box-login"
                    >
                      Login
                    </button>
                    <span>OR</span>
                    <button className="login-container-right-box-otp">
                      Request OTP
                    </button>
                  </div>
                )}
                <span
                  onClick={() => {
                    setSignup(!signup);
                  }}
                  className="login-container-right-footer"
                >
                  {!signup
                    ? "New to Flipkart? Create an account"
                    : "Already have an Account? Login here"}
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default NavBar;
