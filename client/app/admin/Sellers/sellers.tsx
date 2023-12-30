"use client"
import React, { useEffect, useState } from "react";
import "../Clients/clients.css"
import { AiOutlineUserDelete } from "react-icons/ai";
import { PaperClipIcon } from '@heroicons/react/20/solid'



function SellersAdm() {
   
   const [sellerData,setSellerData]=useState<User[]|[]>([])
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
       {sellerData.map((seller:User,i)=>(
    <li key={i} className="group/item hover:bg-slate-100 client-container">
      <div className="client-item">
      <img src="{person.imageUrl}" alt="no content" />
      <div>
        <a href="{person.url}">{seller.fullName}</a>
        <p>{seller.email}</p>
      </div>
      <a className="group/edit invisible group-hover/item:visible ..." href="tel:{person.phone}">
        <span className=""><AiOutlineUserDelete onClick={()=>{deleteSeller(seller.id)}} /></span>
        <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
        </svg>
      </a>
      </div>
      <div className="px-4 sm:px-0 info-user">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Seller Information</h3>
      </div>
      <div className="mt-6 border-t border-gray-100 info-user" >
        <dl className="divide-y divide-gray-100 ">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{seller.fullName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{seller.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Role</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{seller.role}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Registered At</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{seller.createdAt.slice(0,10)}</dd>
          </div>
        </dl>
      </div>
    </li>))}
</ul>
      </div>
    )
  }
  
  export default SellersAdm;