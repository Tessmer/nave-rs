import React, { useState, useEffect } from 'react'

import Input from "./components/Input"
import { TableTh } from "./styles.js"
import './App.css';

const App = () => {
  const [list, setList] = useState([]);
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    console.log(list);
  }, [list])
  
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
         <form className="form" onSubmit={handleSubmit}>
           <Input label="Produtos:" type="text" value={product} onChange={(event) => setProduct(event.target.value)} required />
           <Input label="Preço:" type="number" value={price} last onChange={(event) => setPrice(event.target.value)} />
           <button type="submit">Adicionar produto</button>
         </form>

         <div className="table">
            <table id="table">
              <thead>
                <TableTh>ID</TableTh>
                <TableTh>Produto</TableTh>
                <TableTh>Preço</TableTh>
              </thead>
                {list.map(item => {
                  return (
                    <tbody key={item.id}>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.product}</td>
                        <td>{item.price}</td>
                      </tr>
                    </tbody>
                  )
                })}
            </table>
         </div>
     </div>
)
}

export default App;