import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import useSWR, { useSWRConfig } from "swr";
import ProductRole from "./ProductRole";
import SkeletonLoading from "./SkeletonLoading";
import EmptyStage from "./EmptyStage";
import {  Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import Pagination from "./Pagination";
import Filter from "./Filter";
const ProductList = () => {
  const location=useLocation()
  const [search, setsearch] = useState(import.meta.env.VITE_API_URL + "/products"+location.search );
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [useParams,setParams]=useSearchParams();




// const params=object.Fromentries(useParams)
// console.log(params)
console.log(useParams)
  console.log(location)
  const { data, error, isLoading } = useSWR(search
    ,
    fetcher
  );
  console.log(data);
  const { mutate } = useSWRConfig();

  const handlerSearch = debounce((e) => {

   if(e.target.value){
     setsearch(import.meta.env.VITE_API_URL + "/products?q=" + e.target.value);
    setParams({ q: e.target.value})
    console.log(search)
   }else{
    setParams({})
    setsearch(import.meta.env.VITE_API_URL + "/products");
   }

    console.log(search);
  }, 500);
const updateHandler=(update)=>{
  const currentUrl=new URL(update)
  console.log(currentUrl)
  console.log(currentUrl.searchParams
  )
  // const currentParams=new URLSearchParams(currentUrl.search)
  // console.log(currentParams)

 const currentObject=Object.fromEntries(currentUrl.searchParams)
 console.log(currentObject)
setParams(currentObject)
  setsearch(update)
}
  
// if(isLoading) return <p>loading</p>;

  return (

   <div className=" mt-[16px]">
  {/* //search input */}
  <div className=" flex flex-row justify-between items-center">
    <div className="relative w-1/3  mb-5">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
    
        onChange={handlerSearch}
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900  border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-600 focus:border-redring-red-600"
        placeholder="Search Products"
        required
      />
    </div>

    <Link
      to={"ProductCreate"}
      className="text-white flex flex-row items-center gap-[4px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <IoAddSharp className="size-6" />
      <span>Add new Cart</span>
    </Link>
  </div>
  
    { data?.data && (     
      <div>
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
        <th scope="col" className="px-6 py-3 text-end flex flex-row gap-3 items-center justify-start ">
            <Filter sort="products" setParams={setParams} setsearch={setsearch} sortBy="id"/>
           
           <div className="text-base"> id</div>
          </th>

          <th scope="col" className="px-6 py-3">
            Product name
          </th>

          <th scope="col" className="px-6 py-3 text-end flex flex-row gap-3 items-center justify-end ">
            <Filter sort="products" setParams={setParams} setsearch={setsearch} sortBy="price"/>
           
           <div> Price(MMK)</div>
          </th>
          <th scope="col" className="px-6 py-3  text-end">
            Created at
          </th>
          <th scope="col" className="px-6 py-3  text-end">
            Updated at
          </th>
          <th scope="col" className="px-6 py-3  text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <SkeletonLoading />
        ) : (
          data?.data?.map((product) => (
            <ProductRole
              data={data}
              loading={isLoading}
              key={product.id}
              product={product}
              mutate={mutate}
            />
          ))
        )}
       {!isLoading && data?.data?.length === 0 && <EmptyStage />}
      </tbody>
    </table>
  </div>

<Pagination meta={data?.meta} links={data?.links} fetch={updateHandler} />

      </div>
)  }
  
</div>  

  );
};

export default ProductList;
