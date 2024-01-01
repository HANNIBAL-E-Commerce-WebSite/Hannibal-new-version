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
          <Link href="/shop">
            
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
          src="https://res.cloudinary.com/dubduh12x/image/upload/v1704060943/5c4af3f6449bef4207c9daff8e194b23-removebg_h6be3b.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
