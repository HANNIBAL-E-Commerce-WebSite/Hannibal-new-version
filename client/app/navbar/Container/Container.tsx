// Import necess
import Control from "@/app/navbar/Controls/Controls"
import DrawerNav from "@/app/navbar/DrawerNav/DrawerNav";
import NavBrand from "@/app/navbar/NavBrand/NavBrand";
import NavLinks from "@/app/navbar/NavLinks/Navbar";
import Search from "@/app/navbar/SearchBar/SearchBar";
import SearchRes from "@/app/navbar/SearchBar/SearchResult";
import "./container.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";

interface NavtopProps {
  title: string; 
  isMenuOpen: boolean; 
  results: any;
}
const Navtop: React.FC<NavtopProps> = () => {
  const [results, setResults] = useState<any[]>([]);

  return (
    <div className="nav__top__container">
      <div className="top__container">
        {}
        <NavBrand />
        <div className="form__container">
        </div>
        <div className="control__bar">
          <Control />
        </div>
        <div className="drawer">
          {}
          {/* <DrawerNav /> */}
        </div>
      </div>
    </div>
  );
};


export default Navtop;