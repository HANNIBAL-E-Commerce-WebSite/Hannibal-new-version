import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import "./Landing.css";

const Landing: React.FC = () => {
  return (
    <div className="landing__container">
      <div className="landing__header__container">
        <div className="landing__header">
          <h3 className="landing__header__discount">UP TO 15% DISCOUNT</h3>
          <h1 className="landing__header__main">
            Checkout The Best Fashion Style
          </h1>
          <Link href="/category">
            <Button
              variant="outlined"
              sx={{
                width: "190px",
                height: "50px",
                borderRadius: "20px",
                fontWeight: "700",
                backgroundColor: "none",
                borderColor: "black",
                color: "black",
                "&:hover": {
                  backgroundColor: "black",
                  color: "#FFE26E",
                  borderColor: "black",
                },
              }}
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
      <div className="landing__image__container">
        <img
          className="landing__image"
          src="https://res.cloudinary.com/dubduh12x/image/upload/v1704185752/dda4a6e4e0adea37b20750ee5d7e4d3d-removebg-preview_rmeyjt.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
