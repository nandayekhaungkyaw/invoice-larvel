import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";



import { useNavigate } from 'react-router-dom'

const Pagination = ({meta:{from,to,total,links},links:{next,prev},fetch}) => {
   
const nextHandler = (params)=> {
  console.log(params)
    fetch(params)   
}
const prevHandler = (params)=> {
    fetch(prev)   
}
console.log(links)

  return (
  <div className='mt-8 mb-6'>
  
  <div className="flex flex-row justify-between items-center">
    {/* Help text */}
    <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 dark:text-white">{from}</span> to <span className="font-semibold text-gray-900 dark:text-white">to{to}</span> of <span className="font-semibold text-gray-900 dark:text-white">{total}</span> Entries
    </span>
    {/* Buttons */}
    <div className="inline-flex mt-2 xs:mt-0">
      {/* <button onClick={prevHandler} disabled={!prev}  className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-700 rounded-s ${prev && " hover:bg-blue-800"} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
      <FaLongArrowAltLeft />


      </button>
      <button onClick={nextHandler} disabled={!next} className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-700 rounded-e ${next && " hover:bg-blue-800"} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
      <FaLongArrowAltRight />

      </button> */}

      {links.map((link) => 
        <button key={link.label} onClick={() => nextHandler(link.url)} disabled={!link.url} className={`flex items-center justify-center  px-4 h-10 text-base font-medium 
          border-y-0
          first:rounded-l last:rounded-r 
          ${link.url ? 'hover:bg-blue-500' : ''} 
          ${link.active ? 'bg-blue-300': ' bg-slate-200 '} 
          dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
          dark:hover:bg-gray-700 dark:hover:text-white`}>

{link.label === "&laquo; Previous" ? (
  <FaLongArrowAltLeft />
) : link.label === "Next &raquo;" ? (
  <FaLongArrowAltRight />
) : link.label}

        </button>
      )}
    </div>
  </div>
</div>

  )
}

export default Pagination
