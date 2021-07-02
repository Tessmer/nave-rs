import React, { useState } from 'react'
import { string, func } from 'prop-types'

import Input from '../Input'

const Form = ({ onSubmit }) => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const format = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL", 
    }).format(price)

    onSubmit({id: Date.now(), product: product, price: format})

    setProduct("");
    setPrice("");
  }

    return(
         <form onSubmit={handleSubmit}>
           <Input 
           label="Produtos:" 
           type="text" 
           value={product} 
           onChange={(event) => setProduct(event.target.value)} 
           required 
           mx="8px"
           />

           <Input 
           label="Preço:" 
           type="number" 
           value={price} 
           onChange={(event) => setPrice(event.target.value)} 
           ml="8px"
           onKeyDown={ (event) => event.key === 'e' && event.preventDefault() } />
           
           <button type="submit">Adicionar produto</button>
         </form>
         )
}

  Form.propTypes = {
    onSubmit: func,
    product: string,
    setProduct: string,
    price: string,
    setPrice: string
  }

export default Form