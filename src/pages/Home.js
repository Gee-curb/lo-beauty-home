import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to LO Beauty Home</h1>
        <p>Your one-stop shop for fashion, beauty, and organic living.</p>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At LO Beauty Home, we are passionate about empowering women and families through quality fashion and beauty essentials. 
          Based in the heart of Brás, São Paulo, we offer a curated collection of stylish clothing for women and children, 
          premium human hair wigs, and trusted cosmetics. Our mission is to bring confidence and convenience to every customer by 
          providing products that inspire beauty inside and out. With years of experience and a commitment to excellence, 
          we strive to become Brazil’s most loved and reliable beauty and fashion brand.
        </p>
        <p>
          Whether you're shopping online or visiting us in person, you'll always find products selected with care and love. 
          Our team is here to serve you with integrity, joy, and top-tier customer service. Thank you for choosing LO Beauty Home — 
          where beauty meets style, and every customer feels at home.
        </p>
      </section>
    </div>
  );
}

export default Home;