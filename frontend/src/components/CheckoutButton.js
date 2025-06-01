// src/components/CheckoutButton.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '../context/CartContext';

const stripePromise = loadStripe('pk_test_51RLXY300NJ1ITuJnUzzyZkDKoe5znS3Rszcvd2cOAAoTeFZ5ltW3CEpReuBcf6lRghhTJz0hnHTLzLdXZBNX1soY00VzkJJ9Tj');

function CheckoutButton() {
  const { cartItems } = useCart(); // Use cartItems from context

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems }), // Send cart items
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <button onClick={handleCheckout} className="checkout-button">
      Checkout Now
    </button>
  );
}

export default CheckoutButton;