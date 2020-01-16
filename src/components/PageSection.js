import React from "react"

import styled from "styled-components"

const Section = styled.div`
  min-height: 100vh;
  background-color: ${props => props.color || "#222831"};
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: center;
  align-items: center;
  text-align: center;
`

const pageSection = props => {
  return (
    <Section
      id={props.id}
      color={props.color}
      flexDirection={props.flexDirection}
    >
      {props.children}
    </Section>
  )
}

export default pageSection
