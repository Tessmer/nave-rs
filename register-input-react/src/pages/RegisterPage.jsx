import React from 'react'

import Table from './../components/Table/Table';

const RegisterPage = (list) => {
    return(
        <Table list={list} labels={["ID", "PRODUTO", "PREÇO"]}/>
    )
}

export default RegisterPage;
