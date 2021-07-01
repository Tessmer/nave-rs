import React, { useState } from 'react'

import Form from "./components/Form/Form"
import Table from "./components/Table/Table"
import './App.css';

const App = () => {
  const [list, setList] = useState([]);
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  
const handleSubmit = (event) => {
  event.preventDefault();

  const format = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL", 
  }).format(price);
  setList([...list, {id: Date.now(), product: product, price: format}])

  setProduct("");
  setPrice("");
}

  return (
     <div>
         <Form 
         onSubmit={handleSubmit}
         product={product}
         setProduct={setProduct}
         price={price}
         setPrice={setPrice}
         />
         <Table list={list} labels={["ID", "PRODUTO", "PREÇO"]}/>
     </div>
)
}

export default App;