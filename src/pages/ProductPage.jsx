import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductList from '../components/ProductList'

const ProductPage = () => {
  return (
    <div>
      <Container>
    <Breadcrumb current={"ProductPage"} />
    <ProductList/>

      </Container>
    </div>
  )
}

export default ProductPage
