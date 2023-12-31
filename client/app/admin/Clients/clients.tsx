"use client"
import React, { useEffect, useState } from "react";
import "./clients.css"
import { AiOutlineUserDelete } from "react-icons/ai";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function ClientAdm() {
   
   const [clientData,setClientData]=useState<User[]|[]>([])
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
   
   const deleteClient=(ids:Number)=>{    
    console.log(ids);
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this client?',
      buttons: [
        {
          label: 'Yes',
          onClick:async () => {
            console.log('Item deleted!');
            try {
                const response=await fetch(`http://localhost:8000/users/${ids}`, {method: 'DELETE'})
                console.log("deleted");
                  toast.error("Client deleted!", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                setRefresh(!refresh)
            } catch (error) {
                console.error(error)
            }
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

    return (
<div className="bg-white py-24 sm:py-32">
<ToastContainer />
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hello there</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            those are your clients
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {clientData.map((client,i) => (
            <li key={i}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{client.fullName}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{client.email}</p>
                </div>
                <div onClick={()=>{deleteClient(client.id)}}>
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
  
  export default ClientAdm;