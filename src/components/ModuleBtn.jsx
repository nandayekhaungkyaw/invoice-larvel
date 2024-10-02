import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ({name,icon,url}) => {
  return (
    <Link to={url} className=' flex flex-col justify-center gap-[16px] items-center bg-blue-400 h-full px-4 py-10 rounded-md'>
        <span className='  '>{icon }</span>
        <h4 className=''>{name}</h4>
        
      
    </Link>
  )
}

export default ModuleBtn
