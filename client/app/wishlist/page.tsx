"use client";
import React from "react";
import "./wishlist.css";
import { Button, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Wishlist: React.FC = ({ params }) => {
  const handelRemoveItem = () => {
    console.log("Item removed");
  };

  const handelAddToCart = () => {
    console.log("Item added to cart");
  };

  return (
    <div className="wishlist">
      <div className="wishlist__container">
        <div className="wishlist__header">
          <h2>Your Wishlist</h2>
        </div>
        <div className="wishlist__items__container">
          <div className="wishlist__items">
            <div className="wishcard">
              <div className="wish__remove__item__icon">
                <IconButton onClick={handelRemoveItem}>
                  <HighlightOffIcon />
                </IconButton>
              </div>
              <div className="wish__item__image">
                <img
                  src="https://res.cloudinary.com/dubduh12x/image/upload/v1704060943/5c4af3f6449bef4207c9daff8e194b23-removebg_h6be3b.png"
                  alt="item"
                  className="wish__image"
                />
              </div>
              <div className="wish__item__name">{params.name}</div>
              <div className="wish__item__price">$99.99</div>
              <div className="add__to__cart">
                <Button
                  variant="outlined"
                  onClick={handelAddToCart}
                  sx={[
                    {
                      "&:hover": {
                        backgroundColor: "#FFE26E",
                        borderColor: "#FFE26E",
                        color: "black",
                      },
                      borderColor: "black",
                      backgroundColor: "black",
                      color: "#FFE26E",
                    },
                  ]}
                >
                  Add to cart
                </Button>
              </div>
            </div>

            {/* <div>No items</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
