import React from 'react';
import { useCart } from '../context/CartContext';
import CheckoutButton from '../components/CheckoutButton'; // Step 1
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
          <CheckoutButton /> {/* Step 2 */}
        </>
      )}
    </div>
  );
}

export default Cart;