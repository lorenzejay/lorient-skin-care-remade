import React from "react"
import styled from "styled-components"

const ButtonStyled = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin: 5vh 15px;
  background-color: ${props => props.color};
  padding: 8px 40px;
  border-radius: 3px;
  text-transform: uppercase;
  /* a {
    text-decoration: none;
    font-size: 16px;
  } */
`
const Button = ({ children, color }) => {
  return <ButtonStyled color={color}>{children}</ButtonStyled>
}

export default Button
