import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SaleForm from '../components/SaleForm'

const SalePage = () => {
  return (
    <div>
      <Breadcrumb current="SalePage"/>
      <SaleForm/>
    </div>
  )
}

export default SalePage
