import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeCart, clearCart } from "../../store/actions/cart";
import OrderModal from "./OrderModal";
import { createOrder, clearOrder } from "../../store/actions/orders";
import { words } from "../../words";
import Swal from "sweetalert2";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

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
    setShowForm(false);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ? (
          "Cart Empty"
        ) : (
          <p>
            {words.cartHeader} {props.cartItems.length}
          </p>
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
                  <p>
                    {words.cartTitle}: {item.title}
                  </p>
                  <p>
                    {words.cartQty}: {item.qty}
                  </p>
                  <p>
                    {words.cartPrice}: ${item.price}
                  </p>
                </div>
                <button
                  onClick={() =>
                    Swal.fire({
                      icon: "question",
                      title: "Delete Product!",
                      text: "Are you sure?",
                      showConfirmButton: true,
                      showCancelButton: true,
                      confirmButtonColor: "#CF0A0A",
                      cancelButtonColor: "#B2B2B2",
                      confirmButtonText: "Delete",
                      cancelButtonText: "deny",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        props.removeCart(item);
                      }
                    })
                  }
                >
                  {words.removeBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            {words.total}: $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price * p.qty;
            }, 0)}
          </div>
          <button className="btn" onClick={() => setShowForm(true)}>
            {words.selectProducts}
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
