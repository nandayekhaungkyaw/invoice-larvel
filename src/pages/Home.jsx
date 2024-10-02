import React from 'react'
import ModuleBtn from '../components/ModuleBtn'
import { LuPercent } from "react-icons/lu";
import { VscOutput } from "react-icons/vsc";


import { MdAddShoppingCart } from "react-icons/md";

const Home = () => {
  return (
  <div className=' grid grid-cols-3 gap-[26px]'>
    <ModuleBtn name={'productPage'} icon={<MdAddShoppingCart className='size-7' />} url={"productPage"}/>
    <ModuleBtn name={'SalePage'} icon={<LuPercent className='size-7' />} url={"salePage"}/>
    <ModuleBtn name={'view Vouncher'} icon={<VscOutput className='size-7' />} url={"vouncher"}/>
  </div>
  )
}

export default Home
