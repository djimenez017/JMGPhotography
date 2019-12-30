import React from "react"

import styled from "styled-components"

const Hamburger = styled.div`
  background-color: white;
  width: 25px;
  height: 3px;
  margin: 5px;
  transition: all 0.3s ease;
  display: block;
`

const Hide = styled.div`
  @media screen and (min-width: 500px) {
    display: none;
  }
`

const hamburger = props => {
  return (
    <Hide onClick={props.clicked}>
      <Hamburger></Hamburger>
      <Hamburger></Hamburger>
      <Hamburger></Hamburger>
    </Hide>
  )
}

export default hamburger
