import { ADD_CART, CLEAR_CART, REMOVE_CART } from "./types";
import Swal from "sweetalert2";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p._id === product._id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    dispatch({
      type: ADD_CART,
      data: {
        cartItems: cartItemsClone,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItemsClone));
    Swal.fire({
      position: "top-right",
      icon: "success",
      text: "Added to cart",
      showConfirmButton: false,
      timer: 2500,
      width: "25rem",
      heightAuto: true,
    });
  };
};

export const removeCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItemsClone = [...cartItems];
    const updatedCartItems = cartItemsClone.filter(
      (p) => p._id !== product._id
    );
    dispatch({
      type: REMOVE_CART,
      data: {
        cartItems: updatedCartItems,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    Swal.fire({
      icon: "success",
      title: "Great!",
      text: "Product deleted successfully",
      timer: 2000,
      showConfirmButton: false,
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART,
      data: {
        cartItems: [],
      },
    });
    localStorage.clear("cartItems");
  };
};
