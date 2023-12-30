
"use client";

// import ItemCard from "../../Card/ItemCard/ItemCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ShopCategory.css";
import ReactLoading from "react-loading";

const ShopCategory = ({ category }) => {
  const categoryId = category.id;
  // console.log("id",categoryId);done
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/category/${categoryId}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div className="shop__category__container">
      <div className="shop__category__header">
        <div className="shop__category__header__big">
          <div className="shop__category__head">
            <h2>{category.name} Fashion</h2>
          </div>
          <div className="shop__category__header__line"></div>
        </div>
      </div>
      <div className="shop__category__card__container">
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
            {/* {products.map((product) => (
              <ItemCard key={product.id} product={product} />
              
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
