require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();

// Initialize Stripe with secret key from .env
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware for CORS
app.use(cors());

// Use JSON parser for non-webhook routes
app.use(bodyParser.json());

// Webhook route - needs raw body
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(Webhook Error: ${err.message});
    return res.status(400).send(Webhook Error: ${err.message});
  }

  console.log('Webhook received:', event.type);
  res.json({ received: true });
});

// Checkout session route
app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items,
      mode: 'payment',
      success_url: ${process.env.FRONTEND_URL}/success,
      cancel_url: ${process.env.FRONTEND_URL}/cancel,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Simple test route
app.get('/', (req, res) => {
  res.send('Stripe server is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});