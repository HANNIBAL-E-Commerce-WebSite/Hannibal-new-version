"use client"
import React, { useEffect, useState } from "react";
import "../Clients/clients.css"
import { AiOutlineUserDelete } from "react-icons/ai";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function SellersAdm() {
   
   const [sellerData,setSellerData]=useState<User[]|[]>([])
   const [refresh,setRefresh]=useState<Boolean>(false)
   const [show,setShow]=useState<Number>(0)
   const [showB,setShowB]=useState<Boolean>(false)
  
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
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this seller?',
      buttons: [
        {
          label: 'Yes',
          onClick: async() => {

            try {
                const response=await fetch(`http://localhost:8000/users/${ids}`, {method: 'DELETE'})
                setRefresh(!refresh)
                toast.error("Seller deleted !", {
                  position: toast.POSITION.TOP_RIGHT,
                });
            } catch (error) {
                console.error(error)
            }
            console.log('Item deleted!');
          },
        },
        {
          label: 'No',
          onClick: () => {
            console.log('Deletion canceled.');
          },
        },
      ],
    });
   }

   const handleShow=(id:Number)=>{
    setShow(id)
    setShowB(!showB)
   }
  

    return (
      <div className="bg-white py-24 sm:py-32">
        <ToastContainer />
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hello there</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            those are your Sellers
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {sellerData.map((seller,i) => (
            <li key={i}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{seller.fullName}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{seller.email}</p>
                </div>
                <div onClick={()=>{deleteSeller(seller.id)}}>
                <AiOutlineUserDelete  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }
  
  export default SellersAdm;