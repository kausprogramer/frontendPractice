import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, calculateTotal }) => {
  return (
    <div className="Cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <div className="Cart-items">
          {cart.map(item => (
            <div key={item.id} className="Cart-item">
              <div className="Cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <h3>Total: ${calculateTotal().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
