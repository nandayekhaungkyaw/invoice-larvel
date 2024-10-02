import React, { useState } from 'react'

import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { dotPulse } from 'ldrs'
import EmptyStage from './EmptyStage';
import { useSWRConfig } from 'swr';
import { Link } from 'react-router-dom';
import SetDate from './SetDate';


dotPulse.register()

// Default values shown


const ProductRole = ({ product: { id,productName,price,time },data}) => {
  const [loading, setLoading] = useState(false)
  const { mutate } = useSWRConfig()

    const deleteHandler=async ()=>{
      setLoading(true)
   
        await fetch(import.meta.env.VITE_API_URL+"/products/"+id,{method:"DELETE"})
       
      await  mutate(import.meta.env.VITE_API_URL+"/products")
     
     
       setLoading(false)
 
    }
    console.log(data.length)
    let create_at=new Date(time);
  
  return (
    <>
   
  
          <tr className="odd:bg-white odd::bg-gray-900 even:bg-gray-50 border-b   ">

<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
    {id}
  </th>

  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
    {productName}
  </td>

  
  <td className="px-6 py-4  text-end">
   {price}
  </td>

  
  <td className="px-6 py-4  text-end  ">
  
<SetDate  date={create_at} />
  
  </td>
  
  <td className="px-6 py-4  text-end flex flex-row gap-[4px] justify-end">


<Link to={"/productPage/ProductEditPage/"+id} className=' px-2 py-2 flex justify-center items-center bg-slate-100'><MdOutlineEdit /></Link>

<button onClick={deleteHandler} className=' px-2 py-2 bg-slate-100 flex justify-center items-center'> {loading ? <l-dot-pulse
  size="18"

  speed="1.3" 
  color="black" 
></l-dot-pulse> :<MdDeleteForever /> 
} </button>

</td>
</tr>


    </>
  )
}

export default ProductRole
