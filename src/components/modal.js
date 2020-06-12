import React from "react"

import styled from "styled-components"

const ModalStyle = styled.div`
  background: grey;
  z-index: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 80%;
  height: 60vh;
  position: fixed;
`

const modal = props => {
  console.log(props)
  return <ModalStyle>Hello</ModalStyle>
}

export default modal
