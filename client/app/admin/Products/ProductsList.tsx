"use client"
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import './Product.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  
 const ProductsList=()=> {

    const [products,setProducts]=useState<Products[]|[]>([])
    const [refresh,setRefresh]=useState<Boolean>(false)
    const [show, setShow] = useState<Boolean>(false);
    const fetchProductData=async()=>{
        const res=await fetch(`http://localhost:8000/products`)
        const prod=await res.json()
        console.log(prod);
        setProducts(prod)
    }

    useEffect(()=>{
        fetchProductData()
    },[refresh])

    const deleteProduct=async(ids:Number)=>{
      const res=await fetch(`http://localhost:8000/products/${ids}`,{method:'DELETE'})
      setRefresh(!refresh)
      toast.error("Product deleted !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    const AddProduct=async()=>{
      const res =await fetch(``,{method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify("")})
    }
    return (
      <div className="bg-white">
        <ToastContainer />
        <div className="flex">
        {/* <button
      type="button"
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
      onClick={()=>{setShow(!show)}}
    ><span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Add Product
    </span></button> */}
    </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 button-add">
        
          <h2 className="sr-only">Products</h2>
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product,i) => (
              <a key={i} href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.image}
                    alt="no content"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="flex">
                    <div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                    </div>
                    <div onClick={()=>{
                      deleteProduct(product.id)}}>
                    <MdDelete/>
                    </div>
                    
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  } 


  export default ProductsList 