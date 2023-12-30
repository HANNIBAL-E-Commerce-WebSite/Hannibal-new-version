"use client"
import React, { useEffect, useState } from "react";
import "./clients.css"
import { AiOutlineUserDelete } from "react-icons/ai";


function ClientAdm() {
   
   const [clientData,setClientData]=useState<User[]|[]>([])
   const [refresh,setRefresh]=useState<Boolean>(false)
   const [show,setShow]=useState<Number>(0)
   const [showB,setShowB]=useState<Boolean>(false)
   
   const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/Clients");
      const clientsData = await response.json();
      console.log(clientsData);
      setClientData(clientsData)
    } catch (error) {
      console.error(error);
    }
  };


   useEffect(()=>{
     fetchData()
   },[refresh])
   
   const deleteClient=async(ids:Number)=>{    
    try {
        const response=await fetch(`http://localhost:8000/users/${ids}`, {method: 'DELETE'})
        console.log("deleted");
        setRefresh(!refresh)
    } catch (error) {
        console.error(error)
    }
   }
   const handleShow=(id:Number)=>{
    setShow(id)
    setShowB(!showB)
   }

    return (
      <div>
      <ul role="list">
       {clientData.map((Client:User,i)=>(
    <li key={i} className="client-container">
      <div className="client-item">
      <img src="{person.imageUrl}" alt="no content" />
      <div onClick={()=>{handleShow(Client.id)}}>
        <h2>{Client.fullName}</h2>
        <p>{Client.email}</p>
      </div>
      <a className="">
        <span className=""><AiOutlineUserDelete onClick={()=>{deleteClient(Client.id)}} /></span>
      </a>
      </div>
      {show===Client.id&&<div className="info-user">
      <div className="px-4 sm:px-0 info-user">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Client Information</h3>
      </div>
      <div className="mt-6 border-t border-gray-100 info-user" >
        <dl className="divide-y divide-gray-100 ">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{Client.fullName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{Client.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Role</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{Client.role}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Registered At</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{Client.createdAt.slice(0,10)}</dd>
          </div>
        </dl>
        </div>
      </div>}
    </li>))}
</ul>
      </div>
    )
  }
  
  export default ClientAdm;