import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("pk_test_Your_Publishable_Key_Here");

const Checkout = ({ products }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await axios.post("http://localhost:4242/create-checkout-session", {
      products,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <button onClick={handleCheckout}>
      Pay Now
    </button>
  );
};

export default Checkout;