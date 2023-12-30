"use client"
import React, { useEffect, useState } from "react";
import "./clients.css"
import { AiOutlineUserDelete } from "react-icons/ai";

interface Client {
    id:Number;
    fullName:string;
    email:string; 
    password:string;
    role:string; 
    createdAt:string; 
    updatedAt:string
}

function ClientAdm() {
   
   const [clientData,setClientData]=useState<Client[]|[]>([])
   const [refresh,setRefresh]=useState<Boolean>(false)
  
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

    return (
      <div>
      <ul role="list">
       {clientData.map((client:Client,i)=>(
    <li key={i} className="group/item hover:bg-slate-100 client-item">
      <img src="{person.imageUrl}" alt="no content" />
      <div>
        <a href="{person.url}">{client.fullName}</a>
        <p>{client.email}</p>
      </div>
      <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
      <span className="" onClick={()=>{deleteClient(client.id)}}><AiOutlineUserDelete  /></span>
        <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
        </svg>
      </a>
    </li>))}
</ul>
      </div>
    )
  }
  
  export default ClientAdm;