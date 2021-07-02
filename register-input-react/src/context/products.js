import { createContext, useContext, useState } from "react"


const ProductsContext = createContext({})

export const ProductsProvider = props => {
  const [list, setList] = useState([])

  const addProduct = (values) => {
    setList(prevList => [...prevList, values])
  }

  return <ProductsContext.Provider value={{ list, setList, addProduct }} {...props} />
}

export const useProducts = () => useContext(ProductsContext)