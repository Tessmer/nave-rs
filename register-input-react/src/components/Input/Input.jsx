import React from 'react'

import { Input as StyledInput} from './styles'

const Input = ({label, type, value, onChange, last, ...props}) => {
    return (
        <>
        <label>{label}</label>
        <StyledInput type={type} value={value} onChange={onChange} last={last} {...props}/>
        </>
             )
            }

export default Input