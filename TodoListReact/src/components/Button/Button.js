import styled from 'styled-components'
import { color, space } from 'styled-system'

const Button = styled.button `
    border: none;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.primary}; 
    padding: 4px 8px;
    font-size: 20;
    font-weight: 600;

    ${space}
    ${color}
`

export default Button

