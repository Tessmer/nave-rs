import React from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../context/products'

import Table from './../components/Table/Table';

const RegisterPage = () => {
    const { list } = useProducts()

    return(
        <>
            <Link to='/'>Ir para o formulário</Link>
            <Table list={list} labels={["ID", "PRODUTO", "PREÇO"]}/>
        </>
    )
}

export default RegisterPage;
