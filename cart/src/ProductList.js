import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Apple', price: 0.99 },
  { id: 2, name: 'Banana', price: 0.59 },
  { id: 3, name: 'Orange', price: 1.29 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="ProductList">
      <h2>Products</h2>
      <div className="ProductList-items">
        {products.map(product => (
          <div key={product.id} className="ProductList-item">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
