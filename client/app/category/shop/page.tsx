"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import "./ShopCategory.css";
import "./ItemCard.css";

import ReactLoading from "react-loading";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

interface Category {
  id: Number;
  name: String;
  image: string;
  price: number;
}

const ShopCategory = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  console.log(products, "products");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          "http://localhost:8000/categories/"
        );
        setCategories(response.data);
        setProducts(response.data[0].Products);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
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
              {products
                .filter((product) => product.CategoryId === category.id)
                .map((product, i) => (
                  <div key={i} className="product__card__card">
                    <div className="product__card">
                      <div className="product__image">
                        {product.image && product.image.length > 0 && (
                          <img
                            src={product.image}
                            alt="item"
                            className="product__img"
                          />
                        )}
                      </div>

                      <div className="product__card__detail">
                        <div className="product__name">{product.name}</div>
                        <div className="product__description">
                          <span>
                            {product.description &&
                            product.description.length > 0
                              ? product.description.slice(0, 30) + "..."
                              : ""}
                          </span>
                        </div>
                        <div className="product__price">
                          <span>${product.price}</span>
                        </div>
                        <div className="product__card__action">
                        <IconButton
            //   onClick={handleAddToWishList}
              sx={{
                borderRadius: "20px",
                width: "40px",
                height:
                  "40px" /* borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */,
              }}
            >
              <FavoriteBorderIcon
                sx={{ width: "22px", height: "22px", color: "black" }}
              />
            </IconButton>
            <IconButton
            //   onClick={handleAddToCart}
              sx={{
                borderRadius: "20px",
                width: "40px",
                height:
                  "40px" /*  borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */,
              }}
            >
              <AddShoppingCartIcon
                sx={{ width: "22px", height: "22px", color: "black" }}
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
  );
};

export default ShopCategory;
