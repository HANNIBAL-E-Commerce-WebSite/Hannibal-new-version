"use client";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import Cart from "../../(home)/cart/page";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import "./nav.css";
import "./form.css";
import DrawerNav from "./drawerNav/page";
import SearchResults from "./searchResults/page";
import { useUserContext } from '@/context/userContext' 

interface Product {
  name: string;
}

interface WishItems {
  items: Array<any>;
}
const Nov: React.FC = () => {
  const [results, setResults] = useState<Product[]>([]);
  const [input, setInput] = useState<string>("");
  const {userc}=useUserContext()
  console.log("user",userc);
  

  useEffect(() => {
    fetchData(input);
  }, [input, setResults]);

  const fetchData = (value: string) => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter((product: Product) => {
          return (
            value &&
            product &&
            product.name &&
            product.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  const userId: string | undefined = "1";

  return (
    <div className="nav__top__container">
      <div className="top__container">
        <div className="navbrand__container">
          <h1 className="navbrand">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/dubduh12x/image/upload/v1704182192/hannibal12_lp8bcy.jpg"
                alt=""
              />
            </Link>
          </h1>
        </div>
        <div className="form__container">
          <form className="search__form">
            <input
              type="text"
              placeholder="Search for products"
              className="searchforminput"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button className="search__form__button" type="submit">
              <SearchIcon fontSize="medium" />
            </button>
          </form>
          <SearchResults results={results} />
        </div>
        <div className="control__bar">
          <div className="control__bar__container">
            <div className="controls__container">
              <div className="control">
                <Link href={(userc.userId!==undefined)? "/profile" : "/login"}>
                  <PersonOutlineIcon sx={{ width: "35px" }} />
                </Link>
              </div>
              <div className="control">
                <Link href="/wishlist">
                  <Badge color="error">
                  {/* badgeContent={} */}
                    <FavoriteBorderIcon sx={{ width: "35px" }} />
                  </Badge>
                </Link>
              </div>
              <div className="control">
                <Cart />
              </div>
            </div>
          </div>
        </div>
        <div className="drawer">
          <DrawerNav />
        </div>
      </div>
    </div>
  );
};

export default Nov;
