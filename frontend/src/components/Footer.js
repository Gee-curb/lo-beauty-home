import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 LO Beauty Home. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/lo_beauty_home" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://shopee.com.br/lobeautyhome" target="_blank" rel="noreferrer">
            <i className="fas fa-store"></i>
          </a>
          <a href="mailto:lo.beauty@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/5511954350621"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  );
}

export default Footer;