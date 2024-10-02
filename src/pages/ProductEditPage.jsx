import React from 'react'
import ProductEditCard from '../components/ProductEditCard'
import Breadcrumb from '../components/Breadcrumb'


const ProductEditPage = () => {




  return (
    <div>
          <Breadcrumb current={"Edit"} add={[{title:"ProductPage","path":"/productPage"}]} />
      <ProductEditCard/>
    </div>
  )
}

export default ProductEditPage
