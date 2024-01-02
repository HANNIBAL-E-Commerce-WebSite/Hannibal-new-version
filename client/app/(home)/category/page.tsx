"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import "./ShopCategory.css";
import Link from "next/link";
import ReactLoading from "react-loading";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

const ShopCategory = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Categorie[] | []>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/categories");
        const ress = await response.json();
        setCategories(ress);
        console.log(ress, "products");
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  const handelAddToCart = (obj: any) => {
    console.log(obj);

    let storage: Products[] =
      JSON.parse(localStorage.getItem("basket") as string) || null;
    let arrBasket = [];
    if (storage !== null) {
      arrBasket = [...storage, obj];
    } else {
      arrBasket = [obj];
    }
    localStorage.clear();
    localStorage.setItem("basket", JSON.stringify(arrBasket));
  };

  const handleAddToWishList = async (ids: Number) => {
    const ress = axios.post("http://localhost:8000/wishlist", {
      prodId: ids,
      id: 4,
    });
  };

  return (
    <div className="shop__contianer">
      {categories ? (
        <div className="shop__category__container">
          {categories.map((category, i) => (
            <div key={i} className="shop__category__card__container">
              <div className="shop__category__header">
                <div className="shop__category__header__big">
                  <div className="shop__category__head">
                    <h2>{category.name} Fashion</h2>
                  </div>
                  <div className="shop__category__header__line"></div>
                </div>
              </div>

              {loading ? (
                <ReactLoading
                  type="balls"
                  color="#6c757d"
                  height={100}
                  width={100}
                  className="loading-indicator"
                />
              ) : (
                <div className="shop__category__product__card">
                  {category.Products?.map((product: Products, j: number) => (
                    <div key={j} className="product__card__card">
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
                          {/* <div className="product__description">
                            <span>
                              {product.description &&
                              product.description.length > 0
                                ? product.description.slice(0, 30) + "..."
                                : ""}
                            </span>
                          </div> */}
                          <div className="product__price">
                            <span>${product.price}</span>
                          </div>
                          <div className="product__card__action">
                            <IconButton
                              onClick={() => {
                                handleAddToWishList(product.id);
                              }}
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
                              onClick={() => {
                                handelAddToCart(product);
                              }}
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
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <ReactLoading
          type="balls"
          color="#6c757d"
          height={100}
          width={100}
          className="container h-100 w-10 justify-self-center align-self-center m-auto"
        />
      )}
    </div>
  );
};
export default ShopCategory;
