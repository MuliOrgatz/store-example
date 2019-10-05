import React from 'react';

import StripCheckout from 'react-stripe-checkout';

const StripCheckoutButton =({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_IfVAgLCrInhG9vH4uD8PLyEg00QUONIA7C';

    const onToken = token => {
        console.log( token);
        alert('Payment Successful');    
    }

    return (
        <StripCheckout
            lable = 'Pay Now'
            name = 'Shop Clothing Ltd.'
            billingAddress
            shippingAddress
            image= 'https://image.flaticon.com/icons/svg/148/148905.svg'
            description={`Your total prive is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey= {publishableKey}
        />
    )
}

export default StripCheckoutButton;