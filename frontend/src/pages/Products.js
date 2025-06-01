import React, { useEffect, useState } from 'react';
import './Products.css';
import { useCart } from '../context/CartContext'; // Import useCart

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal state
  const { addToCart } = useCart(); // Get addToCart from context

  useEffect(() => {
    const stored = localStorage.getItem('products');
    let loadedProducts = stored ? JSON.parse(stored) : [];

    // Add White Brazzer if it's not already in the list
    const whiteBrazzer = {
      name: 'White-blazer',
      price: 'R$49.99',
      image: '/images/white-brazzer.jpg', // Ensure this image is in your public/images folder
    };

    const alreadyIncluded = loadedProducts.some(
      (product) => product.name === whiteBrazzer.name
    );

    if (!alreadyIncluded) {
      loadedProducts = [whiteBrazzer, ...loadedProducts];
    }

    setProducts(loadedProducts);
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-container">
      <h1>All Products</h1>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product, index) => (
            <div className="product-card" key={index} onClick={() => openModal(product)}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.price}</p>
            <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;