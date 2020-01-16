import React from "react"

import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-around;
`

const rowItems = props => {
  return <Row>{props.children}</Row>
}

export default rowItems
