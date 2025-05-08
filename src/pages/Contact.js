import React from 'react';
function Contact() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contact Us</h1>
      <p>
        Have a question or need assistance? We're here to help! Reach out to us using any of the contact details below:
      </p>
      <ul>
        <li><strong>Phone:</strong> +55 11 95435-0621 / +55 11 96653-4849</li>
        <li><strong>Email:</strong> lobeautyhome@gmail.com</li>
        <li><strong>Instagram:</strong> <a href="https://www.instagram.com/lo_beauty_home" target="_blank" rel="noreferrer">@lo_beauty_home</a></li>
        <li><strong>Shopee:</strong> <a href="https://shopee.com.br/lobeautyhome" target="_blank" rel="noreferrer">LO Beauty Home on Shopee</a></li>
        <li>
          <strong>WhatsApp:</strong>{' '}
          <a href="https://wa.me/5511954350621" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
            <i className="fab fa-whatsapp" style={{ fontSize: '1.5rem', marginLeft: '5px' }}></i> Chat with us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;