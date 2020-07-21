import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price, currentUser }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_IfVAgLCrInhG9vH4uD8PLyEg00QUONIA7C";

  const onToken = (token) => {
    axios({
      url: "https://us-central1-store-db-1ed77.cloudfunctions.net/stripeReq",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="Shop Clothing Ltd."
      email={currentUser ? currentUser.email : ""}
      billingAddress
      shippingAddress
      image="https://image.flaticon.com/icons/svg/148/148905.svg"
      description={`Your total prive is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(StripeCheckoutButton);
