import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Shop.css';

const Shop = () => {
  const [modalImage, setModalImage] = useState(null);
  const { addToCart } = useCart();

  const openModal = (imageSrc, altText) => {
    setModalImage({ src: imageSrc, alt: altText });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const renderImages = (products) =>
    products.map((product, index) => (
      <div key={index} className="product-card">
        <img
          src={product.src}
          alt={product.alt}
          onClick={() => openModal(product.src, product.alt)}
          className="shop-image"
        />
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ));

  return (
    <div className="shop-container">
      <div className="product-category">
        <h2>Women’s Clothing</h2>
        <div className="product-album">
          {renderImages([
            { src: '/images/white-blazer-dress.jpg', alt: 'White Blazer Dress', name: 'White Blazer Dress', price: '120' },
            { src: '/images/women2.jpg', alt: 'Women Product 2', name: 'Women Product 2', price: '85' },
            { src: '/images/women3.jpg', alt: 'Women Product 3', name: 'Women Product 3', price: '95' },
          ])}
        </div>
      </div>

      <div className="product-category">
        <h2>Kids’ Clothing</h2>
        <div className="product-album">
          {renderImages([
            { src: '/images/kids1.jpg', alt: 'Kids Product 1', name: 'Kids Product 1', price: '60' },
            { src: '/images/kids2.jpg', alt: 'Kids Product 2', name: 'Kids Product 2', price: '70' },
            { src: '/images/kids3.jpg', alt: 'Kids Product 3', name: 'Kids Product 3', price: '65' },
          ])}
        </div>
      </div>

      <div className="product-category">
        <h2>Wigs & Hair</h2>
        <div className="product-album">
          {renderImages([
            { src: '/images/wig1.jpg', alt: 'Wig 1', name: 'Wig 1', price: '150' },
            { src: '/images/wig2.jpg', alt: 'Wig 2', name: 'Wig 2', price: '180' },
            { src: '/images/wig3.jpg', alt: 'Wig 3', name: 'Wig 3', price: '200' },
          ])}
        </div>
      </div>

      <div className="product-category">
        <h2>Cosmetics</h2>
        <div className="product-album">
          {renderImages([
            { src: '/images/cosmetic1.jpg', alt: 'Cosmetic 1', name: 'Cosmetic 1', price: '45' },
            { src: '/images/cosmetic2.jpg', alt: 'Cosmetic 2', name: 'Cosmetic 2', price: '50' },
            { src: '/images/cosmetic3.jpg', alt: 'Cosmetic 3', name: 'Cosmetic 3', price: '55' },
          ])}
        </div>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.src} alt={modalImage.alt} />
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;