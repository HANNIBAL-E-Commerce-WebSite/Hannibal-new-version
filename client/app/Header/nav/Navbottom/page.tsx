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
            <Link href="/shop">Shop</Link>{" "}
          </li>
          <li className="nav-link">
            <Link href="/category/men">Men</Link>
          </li>
          <li className="nav-link">
            <Link href="/category/women">Women</Link>
          </li>
          <li className="nav-link">
            <Link href="/category/kids">Kids</Link>
          </li>
          <li className="nav-link">
            <Link href="/category/babies">Babies</Link>
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
