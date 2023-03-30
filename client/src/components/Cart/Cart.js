import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeCart, clearCart } from "../../store/actions/cart";
import OrderModal from "./OrderModal";
import { createOrder, clearOrder } from "../../store/actions/orders";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const [order, setOrder] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };

    props.createOrder(order);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModal = () => {
    props.clearOrder();
    setCartItems(null);
    setShowForm(false);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 && !props.order ? (
          "Cart Empty"
        ) : (
          <p>There is {props.cartItems.length} products in cart</p>
        )}
      </div>
      {/* Modal */}
      <OrderModal
        cartItems={props.cartItems}
        order={props.order}
        closeModal={closeModal}
      />
      <Bounce left cascade>
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt={item.title} />
              <div className="cart-info">
                <div>
                  <p>title: {item.title}</p>
                  <p>qty: {item.qty}</p>
                  <p>price: ${item.price}</p>
                </div>
                <button onClick={() => props.removeCart(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total: $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button className="btn" onClick={() => setShowForm(true)}>
            select products
          </button>
        </div>
      )}

      {/* Checkout Form */}
      <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}

export default connect(
  (state) => {
    return {
      order: state.order.order,
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart, createOrder, clearOrder, clearCart }
)(Cart);
