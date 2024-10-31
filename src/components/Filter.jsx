import React from 'react'

const Filter = ({setParams,setsearch,sortBy,sort}) => {

    const filterHandler=( order)=>{
        setParams(order)
        console.log(order)
        const filterParams=new URLSearchParams(order).toString()
    console.log(sort)
        setsearch(import.meta.env.VITE_API_URL + `/${sort}?` +filterParams);
    
    
      }
  return (
    <div>

<div className='flex flex-col gap-2'>
 <button onClick={filterHandler.bind(null,{sort_by:sortBy , sort_direction:"asc"})} className=' hover:bg-slate-300 '>      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg></button>
<button onClick={filterHandler.bind(null,{sort_by:sortBy , sort_direction:"desc"})} className=' hover:bg-slate-300 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></button>

      </div>
      
    </div>
  )
}

export default Filter
