import * as actions from "../actions/types";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
  cart: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.PRODUCTS_LOADED:
      localStorage.setItem("products", JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case actions.CART_LOADED: {
      return {
        ...state,
        cart: [...action.payload],
      };
    }
    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    case actions.UPDATE_CART:
      return {
        ...state,
        cart: [...action.payload],
      };
    case actions.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
