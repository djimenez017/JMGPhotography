import React from "react"

import styled from "styled-components"
import variables from "./variables"

const Button = styled.button`
  background-color: ${variables.darkColor};
  color: ${variables.accentColor};
  padding: 10px;
  width: 150px;
  border: ${variables.accentColor} 2px solid;
  margin: 0 10px;

  &:hover {
    background-color: ${variables.accentColor};
    color: ${variables.darkColor};
    border: ${variables.darkColor} 2px solid;
  }
`

const button = props => {
  return <Button>{props.children}</Button>
}

export default button
