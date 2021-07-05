import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProducts } from '../context/products'

import Form from './../components/Form/Form'

const InputPage = () => {
  const history = useHistory()

  const { addProduct } = useProducts()

  const handleAddProduct = (product) => {
    addProduct(product)
    history.push('/register')
  }

  return (
     <div>
        <Form onSubmit={handleAddProduct} />      
     </div>
)
}

export default InputPage