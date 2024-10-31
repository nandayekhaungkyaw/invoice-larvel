import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'

import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import VouncherDetail from '../components/VouncherDetail';
import { debounce } from 'lodash';
import Pagination from '../components/Pagination';
import Filter from '../components/Filter';

const Vouncher = () => {
  const location=useLocation()

  const [useParams,setParams]=useSearchParams();
const fetchUrl=import.meta.env.VITE_API_URL+"/vouchers"+location.search
const [search,setsearch]=useState(fetchUrl)

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const handlerSearch = debounce((e) => {

    if(e.target.value){
      setsearch(import.meta.env.VITE_API_URL + "/vouchers?q=" + e.target.value);
     setParams({ q: e.target.value})
     console.log(search)
    }else{
     setParams({})
     setsearch(import.meta.env.VITE_API_URL + "/vouchers");
    }
 
     console.log(search);
   }, 500);


const updateHandler=(update)=>{
  const currentUrl=new URL(update)
  console.log(currentUrl)
  console.log(currentUrl.searchParams)
  const currentObject=Object.fromEntries(currentUrl.searchParams)
  console.log(currentObject)
 setParams(currentObject)
   setsearch(update)
 
}

  // Use SWR to fetch data from an API
  const { data, error, isLoading } = useSWR(search, fetcher);
  const { mutate } = useSWRConfig();

  // const filterHandler=( order)=>{
  //   setParams(order)
  //   console.log(order)
  //   const filterParams=new URLSearchParams(order).toString()

  //   setsearch(import.meta.env.VITE_API_URL + "/vouchers?" +filterParams);


  // }
  
console.log(data?.data)
  return (
   <div>
     <div>
      <Breadcrumb current="Vouncher-Page"/>
      <div className=' mt-[16px]'>

<div className=' flex flex-row justify-between items-center'>
    
<div className="relative w-1/3  mb-5">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" onChange={handlerSearch} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Products" required />
</div>

<Link to="/productPage" className="text-white flex flex-row items-center gap-[4px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><IoAddSharp className='size-6' /><span>Create Product</span></Link>
</div>


{data?.data && ( 

  <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
      
      <tr>
      <th scope="col" className="px-6 py-3 flex flex-row gap-4  items-center" >
   <Filter sort="vouchers" setParams={setParams} setsearch={setsearch} sortBy="id" />
         <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
</svg>

         </div>
        </th>
        
        <th scope="col" className="px-6 py-3">
          Customer Name
        </th>
        <th scope="col" className="px-6 py-3">
          Voucher-ID
        </th>
      
       
        <th scope="col" className="px-6 py-3 text-end flex flex-row gap-4 justify-center  items-center ">
        <Filter sort="vouchers"  setParams={setParams} setsearch={setsearch} sortBy="net_total" />
        <div >
        Net-Total
        </div>
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
      {!isLoading ? data?.data.map((vouncher,index)=>(
         <VouncherDetail dataAll={index} vouncher={vouncher} key={vouncher.id}/>
      )) : 
      <tr className="odd:bg-white odd::bg-gray-900 even:bg-gray-50 border-b  hidden first:table-row ">

      <th scope="row" colSpan={5} className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap ">
         lOADING.....
        </th>
        </tr>
        }



      <tr className="odd:bg-white odd::bg-gray-900 even:bg-gray-50 border-b  hidden first:table-row ">

<th scope="row" colSpan={5} className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap ">
   This is no vouncher
  </th>





</tr>

    
     
    </tbody>
  </table>
</div>
<Pagination meta={data?.meta} links={data?.links} fetch={updateHandler} />
  </div>
)}



    </div>
   
  
    </div>
   </div>
  )
}

export default Vouncher
