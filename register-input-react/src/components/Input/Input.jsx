import React from 'react'
import { string, func } from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

const Input = ({label, type, value, onChange, ...props}) => {
    return (
        <>
        <label>{label}</label>
        <StyledInput type={type} value={value} onChange={onChange} pattern="[^\s]+" {...props}/>
        </>
             )
            }
            
 const StyledInput = styled.input`
    ${space}
    `
Input.propTypes = {
    label: string.isRequired,
    type: string,
    value: string,
    onChange: func
}

export default Input