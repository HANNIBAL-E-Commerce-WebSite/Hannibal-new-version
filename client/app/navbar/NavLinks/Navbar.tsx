import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';

interface NavLinksProps {
    activeLink?: string;
    isOpen?: false;
}
const NavLinks:React.FC<NavLinksProps> = ({ activeLink, isOpen }) => {
  return (  
    <nav className="nav__bottom__container">
      <div className="bottom__container">
        <ul className="nav">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-link">
            <Link to="/category/men">Men</Link>
          </li>
          <li className="nav-link">
            <Link to="/category/women">Women</Link>
          </li>
          <li className="nav-link">
            <Link to="/category/kids">Kids</Link>
          </li>
          <li className="nav-link">
            <Link to="/category/babies">Babies</Link>
          </li>
          <li className="nav-link">
            <Link to="/About">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
