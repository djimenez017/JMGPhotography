import React from "react"

import styled from "styled-components"

const CardStyle = styled.div`
  width: ${props => props.width || "80%"};
  max-width: 400px;
  text-align: left;
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
`

const card = props => {
  return <CardStyle width={props.width}>{props.children}</CardStyle>
}

export default card
