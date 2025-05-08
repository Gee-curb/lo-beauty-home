// src/pages/Products.js
import React, { useEffect, useState } from 'react';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;