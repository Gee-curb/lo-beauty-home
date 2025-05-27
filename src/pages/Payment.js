// src/pages/Payment.js
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

// Replace this with your working Stripe publishable key
const stripePromise = loadStripe("pk_test_51RQer09Lad6I5pLB847lqdVb0e1X8do1FqtaaQ2hveY0tNsPWuYFZTvgmHVpkzyB7UUQL7z4N4Ho7eWYqNnaDWoQ00hBQxCXWg");

const Payment = () => {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', background: '#fff', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Payment Page</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;