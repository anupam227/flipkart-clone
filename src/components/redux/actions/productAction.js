import axios from "axios";
import { CART, GET_PRODUCTS } from "../../config/api";
import * as actions from "./types";

export const loadProducts = () => (dispatch) => {
  // product loading
  dispatch({
    type: actions.PRODUCTS_LOADING,
  });

  axios
    .get(GET_PRODUCTS)
    .then((res) => {
      dispatch({
        type: actions.PRODUCTS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error loading products");
    });
};
export const addToCart = (item) => (dispatch) => {
  axios
    .post(CART, item)
    .then((res) => {
      dispatch({
        type: actions.ADD_TO_CART,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error adding to cart");
    });
};
export const loadCart = () => (dispatch) => {
  axios
    .get(CART)
    .then((res) => {
      dispatch({
        type: actions.CART_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error loading products");
    });
};
export const removeFromCart = (id) => (dispatch) => {
  axios
    .delete(CART + `/${id}`)
    .then((res) => {
      dispatch({
        type: actions.REMOVE_CART,
        payload: id,
      });
    })
    .catch((err) => {
      console.log("error loading products");
    });
};
