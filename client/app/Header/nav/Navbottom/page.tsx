import Link from "next/link";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <nav className="nav__bottom__container">
      <div className="bottom__container">
        <ul className="nav">
          <li className="nav-link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link href="/category">Shop</Link>
          </li>
          <li className="nav-link">
            <Link href="/category/1">Men</Link>
          </li>
          <li className="nav-link">
            <Link href="/category/2">Women</Link>
          </li>
          <li className="nav-link">
            <Link href="/category/3">Kids</Link>
          </li>
          <li className="nav-link">
            <Link href="/category/4">Babies</Link>
          </li>
          <li className="nav-link">
            <Link href="/about">About</Link> 
          </li>
          <li className="nav-link">
            <Link href="/contact">Contact</Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
