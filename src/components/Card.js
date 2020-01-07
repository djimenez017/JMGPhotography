import React from "react"

import styled from "styled-components"

const CardStyle = styled.div`
  background: black;
  width: 80%;
  text-align: left;
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
`

const card = props => {
  return <CardStyle>{props.children}</CardStyle>
}

export default card
