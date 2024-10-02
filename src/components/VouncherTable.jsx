import React from 'react'
import useVouncherDetail from '../stores/useVouncherDetail'
import useSWR from 'swr'
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const VouncherTable = () => {


const {Lists,remove,ChangeQuantity}=useVouncherDetail();

let total=Lists.map((el)=>el.quantity*el.price).reduce((a,b)=>a+b,0)
let tax=total*0.07
let netTotal=total+tax


function deleteHandler(id){
    console.log(id)
    remove(id)

}

function increaseHandler(id){
    ChangeQuantity(id,1)

}
function decreaseHandler(id){
    ChangeQuantity(id,-1)
    
}


  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="px-6 py-3">
          #
        </th>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3 text-end">
          Price
        </th>
        <th scope="col" className="px-6 text-end py-3">
          Quantity
        </th>
        <th scope="col" className="px-6 text-end py-3">
          cost
        </th>
        <th scope="col" className="px-6 text-end py-3">
         Action
        </th>
      </tr>
    </thead>
    <tbody id="recordTable">
   
      <tr className="bg-white border-b hidden last:table-row dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" colSpan={5} rowSpan={3} className=" text-2xl font-semibold   text-center px-6 tab py-4  text-gray-900 whitespace-nowrap dark:text-white">
          There is no list 
        </th>
      </tr>

        {Lists && Lists.map((item,index)=>(
            
         
            <tr key={index}>
                  <td scope="col" className="px-6 py-3">
             {item.index}
            </td>
            <td scope="col" className="px-6 py-3">
             {item.productName}
            </td>
            <td scope="col" className="px-6 py-3 text-end">
             {item.price}
            </td>
            <td className="px-6 py-4  text-end flex flex-row gap-2 justify-end">
               <button className="minus-btn  print:hidden" onClick={()=>decreaseHandler(item.id)}>
               <CiCircleMinus className='size-6'/>
               </button>
               <span className="template-product-quantity font-semibold text-xl print:text-sm print:font-normal">{item.quantity}</span>
               <button onClick={()=>increaseHandler(item.id)} className="plus-btn  print:hidden">
               <CiCirclePlus className='size-6'/>
            </button>
            </td>
            <th scope="col" className="px-6 text-end py-3">
             {(item.price*item.quantity).toFixed(2)}
            </th>
            <th scope="col" className="px-6 py-3  text-end flex flex-row gap-[4px] justify-end">
          




<button onClick={() => deleteHandler(item.id)} className=' px-2 py-2 bg-slate-100 flex justify-center items-center'> <MdDeleteForever className='size-6' /> 
 </button>

            </th>
          </tr>
            
        ))}
     
    
    </tbody>
    <tfoot>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b  ">
        <th scope="row" colSpan={4} className="  px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center dark:text-white ">
          Total
        </th>
        <td id="recordTotal" className="  px-6 py-4 text-end">
        {(total).toFixed(2)}
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b ">
        <th scope="row" colSpan={4} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center dark:text-white ">
          Tax(vat 7%)
        </th>
        <td id="recordTax" className="px-6 py-4 text-end ">
         {(tax).toFixed(2)} 
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
        <th scope="row" colSpan={4} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center dark:text-white ">
          Net Total(THB)
        </th>
        <td id="recordNetTotal" className="px-6 py-4 text-end ">
        {netTotal.toFixed(2)}
        </td>
      </tr></tfoot>
  </table>
</div>

  )
}


export default VouncherTable
