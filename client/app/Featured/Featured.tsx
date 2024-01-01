"use client";
import React, { useState, useEffect } from "react";

import axios from "axios";
import Link from "next/link";

import "./CategoryCard.css";
import { Button } from "@mui/material";
import "./FeaturedCategories.css";
interface Category {
  id: Number;
  name: String;
  image: string;
}

const Featured: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [featuredCategories, setFeaturedCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          "http://localhost:8000/categories/"
        );
        setFeaturedCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  console.log("category", featuredCategories);

  return (
    <div className="featured__categories__container">
      <div className="featured__categories">
        <div className="featured__categories__header">
          <h1 className="featured__header__big">Featured Categories </h1>
          <div className="featured__categories__header__line"></div>
        </div>
        <div className="featured__categories__card__container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            featuredCategories.map((category, i) => (
              <div key={i} className="category__name">
                {/* <span>{category.name}</span> */}
                <div className="category__card__card">
                  <div className="category__image">
                    <img src={category.image} alt="" className="product__img" />
                  </div>
                  <div className="category__card__detail">
                    <div className="category__name">
                      <span>{category.name}</span>
                    </div>
                    <div className="category__card__action">
                      <Link href={`/category/${category.id}`}>
                        <Button
                          variant="outlined"
                          sx={[
                            {
                              "&:hover": {
                                backgroundColor: "none",
                                borderColor: "#FFE26E",
                                color: "#FFE26E",
                              },
                              borderRadius: "20px",
                              borderColor: "#FFE26E",
                              backgroundColor: "#FFE26E",
                              color: "#000",
                              fontWeight: "700",
                            },
                          ]}
                        >
                          SHOP NOW
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
