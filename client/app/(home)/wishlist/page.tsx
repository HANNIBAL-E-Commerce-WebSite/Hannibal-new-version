"use client";
import React,{useEffect, useState}from "react";
import "./wishlist.css";
import { Button, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { refresh } from "@cloudinary/url-gen/qualifiers/artisticFilter";
import axios from "axios";

const Wishlist: React.FC = () => {

  const [wishList,setWishList]=useState<Orders[]|[]>([])
  const [refresh,setRefresh]=useState<Boolean>(false)


  const fetchData=async()=>{
    const response = await fetch(`http://localhost:8000/wishlist/4`);
    const ress=await response.json()
    setWishList(ress)
  }
  useEffect(()=>{
    fetchData()
  },[refresh])
  const handelRemoveItem = async(prod:Number) => {
    const resss=await axios.put('http://localhost:8000/wishlist',{
      ProductId:prod,
      UserId:4
  })
    setRefresh(!refresh)
  };
  const handelAddToCart = (obj:any) => {
    console.log(obj);
    
      let storage:Products[]=JSON.parse(localStorage.getItem("basket") as string)|| null
      let arrBasket=[]
      if(storage!==null){
          arrBasket=[...storage,obj]
        }
      else{
        arrBasket=[obj]
      }
          localStorage.clear()
          localStorage.setItem("basket",JSON.stringify(arrBasket))
    
  };

  return (
    <div className="wishlist">
      <div className="wishlist__container">
        <div className="wishlist__header">
          <h2>Your Wishlist</h2>
        </div>
        <div className="wishlist__items__container">
          {wishList.map((el,j)=>(
          <div key={j} className="wishlist__items">
            <div className="wishcard">
              <div className="wish__remove__item__icon">
                <IconButton onClick={()=>{handelRemoveItem(el.Product.id)}}>
                  <HighlightOffIcon />
                </IconButton>
              </div>
              <div className="wish__item__image">
                <img
                  src={el.Product.image}
                  alt="item"
                  className="wish__image"
                />
              </div>
              <div className="wish__item__name">{el.Product.name}</div>
              <div className="wish__item__price">${el.Product.price}</div>
              <div className="add__to__cart">
                <Button
                  variant="outlined"
                  onClick={()=>{
                    console.log("hello");
                    
                    handelAddToCart(el.Product)}}
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
          </div>))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
