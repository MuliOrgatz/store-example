import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripCheckoutButton from "../../components/stripe-button/strip-button.components";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="table-responsive-sm">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="header-block">
              Product
            </th>
            <th scope="col" className="header-block">
              Description
            </th>
            <th scope="col" className="header-block">
              Quantity
            </th>
            <th scope="col" className="header-block">
              Price
            </th>
            <th scope="col" className="header-block">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
      </table>
    </div>
    <div className="total">
      <h2>TOTAL: ${total}</h2>
    </div>
    <div className="test-warning">
      <p className="h5">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp:01/21 - CVV: 123
      </p>
    </div>
    <StripCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
