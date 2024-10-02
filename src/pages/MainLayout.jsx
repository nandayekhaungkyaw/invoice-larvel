import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
   
  <Container>
       <div className='h-screen flex flex-col'>
  <Header/>
  <Toaster
  position="top-right"
  reverseOrder={false}
/>
  <Outlet/>

  
  </div>
  </Container>
   
  )
}

export default MainLayout
