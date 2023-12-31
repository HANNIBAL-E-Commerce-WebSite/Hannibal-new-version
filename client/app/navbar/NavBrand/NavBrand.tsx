import "./NavBrand.css";
import { Link } from "react-router-dom";
import React from "react";

interface NavBrandProps {}

const NavBrand: React.FC<NavBrandProps> = () => {
  return (
    <div className="navbrand__container">
      <h1 className="navbrand">
        <Link to="/">HANNIBAL</Link>
      </h1>
    </div>
  );
};

export default NavBrand;
