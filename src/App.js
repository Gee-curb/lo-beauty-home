import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer'; // Import Footer

function App() {
  const [products, setProducts] = useState([
    {
      name: 'Red Wig',
      image: '/images/red-wig.jpg',
      price: 'R$120',
    },
    {
      name: 'Kids Dress',
      image: '/images/kids-dress.jpg',
      price: 'R$90',
    },
    {
      name: 'Lip Gloss',
      image: '/images/lip-gloss.jpg',
      price: 'R$20',
    },
  ]);

  useEffect(() => {
    const existing = localStorage.getItem('products');
    if (!existing) {
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
        </Routes>
        <Footer /> {/* Footer appears on all pages */}
      </Router>
    </div>
  );
}

export default App;