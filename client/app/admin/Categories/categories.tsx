"use client"

import React,{useState,useEffect} from "react"


const Categories=()=>{

    const [dataCate,setDataCate]=useState<Categorie[]|[]>([])
    const [refresh,setRefresh]=useState<Boolean>(false)

    const fetchData=async()=>{
        try {
            const res=await fetch("http://localhost:8000/categories")
            const categoriesData=await res.json()
            console.log(categoriesData);
            
            setDataCate(categoriesData)
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[refresh])

    const deleteCategory=async(ids:Number)=>{
        const res = await fetch(`${ids}`)
        console.log("hhh");
        
        setRefresh(!refresh)
    }
    return (
        <div>
            
        </div>
    )
}   

export default Categories;