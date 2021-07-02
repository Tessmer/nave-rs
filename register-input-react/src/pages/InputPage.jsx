import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useProducts } from '../context/products';

import Form from './../components/Form/Form';

const InputPage = () => {
  const history = useHistory()

  const { addProduct } = useProducts()

  const handleAddProduct = (product) => {
    addProduct(product)
    history.push('/register')
  }

  return (
     <div>
        <Link to='/register'>Ir para lista</Link>
          <Form onSubmit={handleAddProduct} />
     </div>
)
}

export default InputPage;