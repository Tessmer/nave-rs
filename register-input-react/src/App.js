import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import InputPage from './pages/InputPage'
import RegisterPage from './pages/RegisterPage'

import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={InputPage} />
      <Route path="/register" exact component={RegisterPage} />
      </Switch>
  </BrowserRouter>
  )
}

export default App;