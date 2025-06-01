import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './CheckoutForm.css'; // Add this line

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const { id } = paymentMethod;
      try {
        const res = await axios.post('http://localhost:4242/checkout', {
          amount: 1000, // 10.00 in minor currency unit
          id,
        });

        if (res.data.success) {
          alert('Payment Successful!');
        }
      } catch (error) {
        console.log('Payment error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="card-element">
        <CardElement />
      </div>
      <button type="submit" disabled={!stripe} className="pay-button">Pay</button>
    </form>
  );
};

export default CheckoutForm;