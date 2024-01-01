/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReactLoading from "react-loading";
import "./FeaturedItems.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const FeaturedItems: React.FC = () => {
  const [products, setProducts] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState(4); // number item of card to display initially
  const [showAllClicked, setShowAllClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:8000/products/"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  console.log("products: ", products);

  return (
    <div className="featured__products__container">
      <div className="featured__products">
        <div className="featured__products__header">
          <h3 className="featured__items__header__big">Featured Items </h3>
          {showAllClicked ? null : (
            <Link
              className="featured__header__small show-all-link"
              href="/category"
            >
              Show all
              <ArrowRightAltIcon />
            </Link>
          )}
        </div>
        <div className="featured__products__header__line"></div>
        <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
          {!products ? (
            <ReactLoading
              type="balls"
              color="#6c757d"
              height={100}
              width={100}
              className="m-auto"
            />
          ) : (
            <div className="featured__products__card__container">
              {products?.slice(0, displayedProducts).map((product) => (
                <div key={product.id} className="category__card__container">
                  <div className="category__product__card">
                    <div className="product__card__card">
                      <div className="product__card">
                        <Link href={`/Product/${product.id}`}>
                          <div className="product__image">
                            {product.image && product.image.length > 0 && (
                              <img
                                src={product.image}
                                alt="item"
                                className="product__img"
                              />
                            )}
                          </div>
                        </Link>
                        <div className="product__card__detail">
                          <div className="product__name">{product.name}</div>
                          <div className="product__price">
                            <span>${product.price}</span>
                          </div>
                          <div className="product__card__action">
                            <IconButton
                              sx={{
                                borderRadius: "20px",
                                width: "40px",
                                height: "40px",
                              }}
                            >
                              <FavoriteBorderIcon
                                sx={{
                                  width: "22px",
                                  height: "22px",
                                  color: "black",
                                }}
                              />
                            </IconButton>
                            <IconButton
                              sx={{
                                borderRadius: "20px",
                                width: "40px",
                                height: "40px",
                              }}
                            >
                              <AddShoppingCartIcon
                                sx={{
                                  width: "22px",
                                  height: "22px",
                                  color: "black",
                                }}
                              />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
