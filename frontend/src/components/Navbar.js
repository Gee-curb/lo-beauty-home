import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img 
          src="/images/LOBeautyHomeLogo.png" 
          alt="LO Beauty Home Logo" 
          className="logo-img" 
        />
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/products">Products</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;