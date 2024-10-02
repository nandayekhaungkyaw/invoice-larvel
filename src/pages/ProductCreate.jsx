import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductCreateCard from '../components/ProductCreateCard'

const ProductCreate = () => {
  return (
    <div>
    <Container>
  <Breadcrumb current={"Create"} add={[{title:"ProductPage","path":"/productPage"}]} />
        <ProductCreateCard/>
    </Container>
  </div>
)
  
}

export default ProductCreate
