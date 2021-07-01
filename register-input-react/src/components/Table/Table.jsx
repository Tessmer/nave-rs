import React from 'react'
import styled from 'styled-components'

const Table = ({list, labels}) => {
    return(
            <StyledTable>
              <thead>
                <tr>
                  {labels.map(label => {
                    return (
                      <StyledTh key={label}>
                        {label}
                      </StyledTh>
                    )
                  })}
                  
                </tr>
              </thead>
              <tbody>
                {list.map(item => {
                  return (
                      <tr key={item.id}>
                        <StyledTd>{item.id}</StyledTd>
                        <StyledTd>{item.product}</StyledTd>
                        <StyledTd>{item.price}</StyledTd>
                      </tr>
                  )
                })}
                </tbody>
            </StyledTable>
    )
              }

  const StyledTable = styled.table`
    margin-top: 8px;
    border-collapse: collapse;
  `

  const StyledTh = styled.th`
    border: 1px solid black;
    width: 199.5px;
  `

  const StyledTd = styled.td`
    border: 1px solid black;
    font-size: 16px;
    text-align: center;
  `

export default Table