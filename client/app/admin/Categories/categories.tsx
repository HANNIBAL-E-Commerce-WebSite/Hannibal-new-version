"use client"

import React,{useState,useEffect} from "react"
import "../../(home)/Featured/FeaturedCategories.css"
import "../../(home)/Featured/CategoryCard.css"
import { MdDelete } from "react-icons/md";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Categories=()=>{

    const [dataCate,setDataCate]=useState<Categorie[]|[]>([])
    const [refresh,setRefresh]=useState<Boolean>(false)
    const [loading, setLoading] = useState<Boolean>(true);
    const [show, setShow] = useState<Boolean>(false);
    const [addName, setAddName] = useState<string>("");
    const [addImg, setAddImg] = useState<string>("");

    const fetchData=async()=>{
        try {
            const res=await fetch("http://localhost:8000/categories")
            const categoriesData=await res.json()
            console.log(categoriesData)
            setDataCate(categoriesData)
            setLoading(false)
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[refresh])

    const deleteCategory=(ids:Number|undefined)=>{
      confirmAlert({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this item?',
        buttons: [
          {
            label: 'Yes',
            onClick: async() => {
              const res = await fetch(`http://localhost:8000/categories/${ids}`,{method:'DELETE'})
              console.log("hhh");
              toast.error("Category deleted !", {
                position: toast.POSITION.TOP_RIGHT,
              });
              
              setRefresh(!refresh)
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

    const AddCategory = async () => {
      try {
        const res = await fetch("http://localhost:8000/categories", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: addName,
            image: addImg,
          }),
        });
    
        if (res.ok) {
          console.log('Category added successfully!');
          setShow(false);
          setRefresh(!refresh);
          toast.success("Category adedd !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          
        } else {
          console.error('Failed to add category');
        }
      } catch (error) {
        console.error(error);
      }
    };
    

    return (
        <div className="featured__categories__container">
          <ToastContainer />
        <div className="featured__categories">
        <button
      type="button"
      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      onClick={()=>{setShow(!show)}}
    >Add Category</button>
        {show&&<form className='add-cat'>
      <div className="space-y-12 hhh">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Category name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Category name"
                    onChange={(e)=>{setAddName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" onClick={(e)=>{setAddImg("https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg")}} />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

          </div>
        </div>

       
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={()=>{setShow(!show)}}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={(e)=>{
            e.preventDefault()
            AddCategory()}}
        >
          Save
        </button>
      </div>
    </form>}
          <div className="featured__categories__card__container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              dataCate.map((category,i) => (
                <div key={i} className="category__name">
                  <div className="category__card__card">
        <div className="category__image">
          <img src={category.image} alt="" className="product__img" />
        </div>
        <div className="category__card__detail">
          <div className="category__name cat-name">
            <span>{category.name}</span>
           
          </div>
          <div className="category__card__action cat-name" onClick={()=>{deleteCategory(category.id)}}>
          <MdDelete />
          </div>
        </div>
      </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )
}   

export default Categories;