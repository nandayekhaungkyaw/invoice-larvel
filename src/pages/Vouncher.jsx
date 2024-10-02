import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import VouncherDetail from '../components/VouncherDetail';

const Vouncher = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());



  // Use SWR to fetch data from an API
  const { data, error, isLoading } = useSWR(import.meta.env.VITE_API_URL+"/vouncher", fetcher);
  const { mutate } = useSWRConfig();

  console.log(data)

  return (
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
  <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Products" required />
</div>

<Link to="/productPage" className="text-white flex flex-row items-center gap-[4px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><IoAddSharp className='size-6' /><span>Create Product</span></Link>
</div>



<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
      
      <tr>
      <th scope="col" className="px-6 py-3">
          #
        </th>
        
        <th scope="col" className="px-6 py-3">
          Customer Name
        </th>
      
       
        <th scope="col" className="px-6 py-3 text-center">
          Email
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
      {!isLoading && data.map((vouncher,index)=>(
         <VouncherDetail dataAll={index} vouncher={vouncher} key={vouncher.id}/>
      ))}



      <tr className="odd:bg-white odd::bg-gray-900 even:bg-gray-50 border-b  hidden first:table-row ">

<th scope="row" colSpan={5} className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap ">
   This is no vouncher
  </th>





</tr>

    
     
    </tbody>
  </table>
</div>


    </div>
    </div>
  )
}

export default Vouncher
