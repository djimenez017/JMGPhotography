import React from "react"

import styled from "styled-components"

const Section = styled.div`
  min-height: 100vh;

  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  right: 0;
  top: 0;
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
