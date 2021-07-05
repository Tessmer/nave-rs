import React from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../context/products'

import Table from './../components/Table/Table';

const RegisterPage = () => {
    const { list } = useProducts()
    
    return(
        <>
            <Table list={list} labels={["ID", "PRODUTO", "PREÇO"]}/>
            <Link to='/'><button>← Voltar para o formulário</button></Link>
        </>
    )
}

export default RegisterPage;
