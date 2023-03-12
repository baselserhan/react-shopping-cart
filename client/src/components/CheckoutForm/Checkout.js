import React from "react";
import "../../css/CheckoutForm/Checkout.css";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";

function Checkout(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <Zoom>
            <form onSubmit={props.submitOrder}>
              <Input
                label="Name"
                type="text"
                onChange={props.handleChange}
                name="name"
              />
              <Input
                label="Email"
                type="email"
                onChange={props.handleChange}
                name="email"
              />
              <div>
                <button type="submit" className="btn btn-checkout">
                  Checkout
                </button>
              </div>
            </form>
          </Zoom>
        </div>
      )}
    </>
  );
}

export default Checkout;
