import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import InputPage from './pages/InputPage'
import RegisterPage from './pages/RegisterPage'
import { ProductsProvider } from './context/products'

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProductsProvider>
          <Route path="/" exact component={InputPage} />
          <Route path="/register" exact component={RegisterPage} />
        </ProductsProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App