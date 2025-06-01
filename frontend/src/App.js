import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

function App() {
  const [products, setProducts] = useState([
    { name: 'Red Wig', image: '/images/red-wig.jpg', price: 'R$120' },
    { name: 'Kids Dress', image: '/images/kids-dress.jpg', price: 'R$90' },
    { name: 'Lip Gloss', image: '/images/lip-gloss.jpg', price: 'R$20' },
  ]);

  useEffect(() => {
    const existingProducts = localStorage.getItem('products');
    if (!existingProducts) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  return (
    <div className="app-container">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<Admin products={products} setProducts={setProducts} />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />

          {/* Test Route */}
          <Route
            path="/test"
            element={<div style={{ color: 'white', padding: '2rem' }}>Test route is working!</div>}
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;