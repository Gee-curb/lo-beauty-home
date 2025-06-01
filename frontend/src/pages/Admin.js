// src/pages/Admin.js
import React, { useState } from 'react';
import './Admin.css';

function Admin() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, image } = formData;

    if (!name || !price || !image) return;

    const newProduct = { name, price, image };
    const updatedProducts = [...products, newProduct];

    // Save to localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Update state
    setProducts(updatedProducts);
    setFormData({ name: '', price: '', image: '' });
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-form-section">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>

      <div className="admin-preview-section">
        <h2>Preview</h2>
        {products.length === 0 ? (
          <p className="no-product">No products added yet</p>
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
    </div>
  );
}

export default Admin;