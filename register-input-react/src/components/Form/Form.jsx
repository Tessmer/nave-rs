import React from 'react'
import { string, func } from 'prop-types'

import Input from '../Input'

const Form = ({onSubmit, product, setProduct, price, setPrice}) => {
    return(
         <form onSubmit={onSubmit}>
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