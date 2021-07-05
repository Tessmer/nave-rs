import React from 'react'
import { string, func } from 'prop-types'
import { Controller, useForm } from 'react-hook-form'

import Input from '../Input'

const Form = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      product: '',
      price: ''
    }
  })

  const handlePreSubmit = (values) => {
    const format = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format (values.price)

    onSubmit({id: Date.now(), product: values.product, price: format})

    reset()
  }

    return (
         <form onSubmit={handleSubmit(handlePreSubmit)}>
           <Controller 
            control={control}
            name="product"
            render={({ name, onChange, value }) => (
              <Input
                name={name} 
                label="Produtos:" 
                type="text" 
                value={value} 
                onChange={onChange} 
                required 
                mx="8px"
                />
                )}
           />

          <Controller
            control={control}
            name="price"
            render={({ name, onChange, value }) => (
              <Input 
                name={name}
               label="Preço:" 
               type="number" 
               value={value} 
               onChange={onChange} 
               ml="8px"
               onKeyDown={ (event) => event.key === 'e' && event.preventDefault() } 
              />
            )}
           />
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