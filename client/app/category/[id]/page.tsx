"use client";
import React, { useState, useEffect } from'react';
import Box from'@mui/material/Box';
import InputLabel from'@mui/material/InputLabel';
import MenuItem from'@mui/material/MenuItem';
import FormControl from'@mui/material/FormControl';
import Select from'@mui/material/Select';
import Button from'@mui/material/Button';
import axios from 'axios';
import './Category.css';
import { SelectChangeEvent } from '@mui/material/Select';
import ReactLoading from "react-loading";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import "../shop//ShopCategory.css"
import { useRouter } from 'next/router'


const Category: React.FC<CategoryProps> = ({params}) => {
 
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Categorie[]|[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [allItems, setAllItems] = useState<Product[]>([]);

  
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`http://192.168.1.150:8000/categories/${params.id}}`);
        const ress=await response.json()
        setCategories(ress);
        const sortedProducts = ress.Products.sort((a, b) => b.rate - a.rate);

        const topFourProducts = sortedProducts.slice(0, 4);
        setItems(topFourProducts);
        setAllItems(sortedProducts); // Set all products in a separate state

        console.log(ress, "products");
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const [show, setShow] = useState<string>('All');
  const [filter, setFilter] = useState<string>('Latest');

  const handleShowChange = (event: SelectChangeEvent<string>) => {
    setShow(event.target.value);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value);
  };

  const handleShowMore = () => {
    setItems(allItems);
  };


  return (
    <div className="category__container">

      <div  className="category">
        
        <div className="category__header__container">
          <div className="category__header__big">
            <div className="category__header">
              <h2>{categories.name}'s Fashion</h2>
            </div>
            <div className="category__header__line"></div>
          </div>
          <div className="category__sort">
            <div className="show__filter">
              <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>Show</InputLabel>
                  <Select value={show} label="Show" onChange={handleShowChange}>
                    <MenuItem value={"All"}>All</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="filter__by">
              <div className="show__filter">
                <Box sx={{ width: 120 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Filter by</InputLabel>
                    <Select
                      value={filter}
                      label="Filter"
                      onChange={handleFilterChange}
                    >
                      <MenuItem value={"Latest"}>Latest</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div className="category__card__container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="category__product__card">
            
            {items.map((product: Product, j: number) => (
                    <div key={j} className="product__card__card">
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
                              // onClick={handleAddToWishList}
                              sx={{
                                borderRadius: "20px",
                                width: "40px",
                                height: "40px",
                              }}
                            >
                              <FavoriteBorderIcon
                                sx={{ width: "22px", height: "22px", color: "black" }}
                              />
                            </IconButton>
                            <IconButton
                              // onClick={handleAddToCart}
                              sx={{
                                borderRadius: "20px",
                                width: "40px",
                                height: "40px",
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
              <div className="show__more__action">
              <Button
    variant="outlined"
    sx={{
        width: "200px",
        height: "50px",
        borderRadius: "20px",
        fontWeight: "700",
        backgroundColor: "#FFE26E",
        borderColor: "#FFE26E",
        color: "black",
        "&:hover": {
            borderColor: "#FFE26E",
            backgroundColor: "none",
        },
    }}
    onClick={handleShowMore}
>
    Show more
</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
