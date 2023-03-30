import React from "react";
import "../../css/CheckoutForm/Checkout.css";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";
import { words } from "../../words";

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
                label={words.name}
                type="text"
                onChange={props.handleChange}
                name="name"
              />
              <Input
                label={words.email}
                type="email"
                onChange={props.handleChange}
                name="email"
              />
              <div>
                <button type="submit" className="btn btn-checkout">
                  {words.checkout}
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
