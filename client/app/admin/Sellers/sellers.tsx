"use client"
import React, { useEffect, useState } from "react";
import "../Clients/clients.css"
import { AiOutlineUserDelete } from "react-icons/ai";

interface Seller {
    id:Number;
    fullName:string;
    email:string; 
    password:string;
    role:string; 
    createdAt:string; 
    updatedAt:string
}

function SellersAdm() {
   
   const [sellerData,setSellerData]=useState<Seller[]|[]>([])
   const [refresh,setRefresh]=useState<Boolean>(false)
  
   const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/Sellers");
      const sellersData = await response.json();
      console.log(sellersData);
      setSellerData(sellersData)
    } catch (error) {
      console.error(error);
    }
  };
   useEffect(()=>{
     fetchData()
   },[refresh])

   const deleteSeller=async(ids:Number)=>{
    try {
        const response=await fetch(`http://localhost:8000/users/${ids}`, {method: 'DELETE'})
        console.log("deleted");
        setRefresh(!refresh)
    } catch (error) {
        console.error(error)
    }
   }
  

    return (
      <div>
      <ul role="list">
       {sellerData.map((seller:Seller,i)=>(
    <li key={i} className="group/item hover:bg-slate-100 client-item">
      <img src="{person.imageUrl}" alt="no content" />
      <div>
        <a href="{person.url}">{seller.fullName}</a>
        <p>{seller.email}</p>
      </div>
      <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span className="" onClick={()=>{deleteSeller(seller.id)}}><AiOutlineUserDelete  /></span>
        <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
        </svg>
      </a>
    </li>))}
</ul>
      </div>
    )
  }
  
  export default SellersAdm;