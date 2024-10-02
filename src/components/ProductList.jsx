import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import useSWR, { useSWRConfig } from 'swr';
import ProductRole from './ProductRole';
import SkeletonLoading from './SkeletonLoading';
import EmptyStage from './EmptyStage';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR(import.meta.env.VITE_API_URL+"/products", fetcher)
   

  const { mutate } = useSWRConfig()


 
console.log(data)

  return (
    <div className=' mt-[16px]'>

{/* //search input */}
<div className=' flex flex-row justify-between items-center'>
    
<div className="relative w-1/3  mb-5">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Products" required />
</div>

<Link to={"ProductCreate"} className="text-white flex flex-row items-center gap-[4px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><IoAddSharp className='size-6' /><span>Add new Cart</span></Link>
</div>



<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
      <tr>
      <th scope="col" className="px-6 py-3">
          id
        </th>
        
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
      
       
        <th scope="col" className="px-6 py-3 text-end ">
          Price(MMK)
        </th>
        <th scope="col" className="px-6 py-3  text-end">
         Created AT
        </th>
        <th scope="col" className="px-6 py-3  text-end">
          Action
        </th>
      </tr>
    </thead>
    <tbody>

    {isLoading ?<SkeletonLoading/> : data.map((product) => (
        <ProductRole data={data} loading={isLoading} key={product.id} product={product} mutate={mutate} />
      ))  }
       {isLoading ? "": data.length === 0 ? <EmptyStage/> : ""}
  
     
    </tbody>
  </table>
</div>


    </div>
  )
}

export default ProductList
