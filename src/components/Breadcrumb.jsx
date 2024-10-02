import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Breadcrumb = ({url,current,add}) => {
 console.log(add)
  return (
    <div>
     
<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <Link to="/" className="inline-flex  gap-[4px] items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
      <FaHome />
        Home
      </Link>
    </li>
   
 
    {add && (
              <li className="inline-flex items-center">
              <Link to={`${add[0].path}`} className="inline-flex  gap-[4px] items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
              <IoIosArrowForward />
                {add[0].title}
              </Link>
            </li>
          )}
    <li>
      


      <div className="flex items-center">
      <IoIosArrowForward />
        <Link to={url} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-blue-500">{current}</Link>
      </div>
    </li>
  </ol>
</nav>


    </div>
  )
}

export default Breadcrumb
