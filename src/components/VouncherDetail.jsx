import React, { useState } from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import SetDate from './SetDate';
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
import { FcViewDetails } from "react-icons/fc";
import { Link } from 'react-router-dom';
const VouncherDetail = ({vouncher:{id,CustomerName,CustomerEmail,SaleDate,date},dataAll}) => {

    const [loading, setLoading] = useState(false)
    const { mutate } = useSWRConfig()
  
      const deleteHandler=async ()=>{
        setLoading(true)
     
          await fetch(import.meta.env.VITE_API_URL+"/vouncher/"+id,{method:"DELETE"})
         
        await  mutate(import.meta.env.VITE_API_URL+"/vouncher")
       
       
         setLoading(false)
         toast.success('Successfully Deleted')
   
      }
    
  return (
    <tr className="odd:bg-white odd::bg-gray-900 even:bg-gray-50 border-b   ">

    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
        {dataAll+1}
      </th>
    
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
     {CustomerName}
      </td>
    
      
      <td className="px-6 py-4  text-center">
      {CustomerEmail}
      </td>
    
      
      <td className="px-6 py-4  text-end  ">
      
    <SetDate date={date} />
      
      </td>
      
      <td className="px-6 py-4  text-end flex flex-row gap-[4px] justify-end">
    
      <Link to={`/vouncher/VouncherOne/${id}`} className=' px-2 py-2  bg-slate-100 flex justify-center items-center'> <FcViewDetails />

 </Link>

      <button onClick={deleteHandler} className=' px-2 py-2  bg-slate-100 flex justify-center items-center'> {loading ? <l-dot-pulse
  size="18"

  speed="1.3" 
  color="black" 
></l-dot-pulse> :<MdDeleteForever /> 
} </button>
    
    
    </td>
    </tr>
  )
}

export default VouncherDetail
