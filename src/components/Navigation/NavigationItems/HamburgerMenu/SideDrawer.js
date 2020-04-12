import React from "react"
import NavigationItems from "../NavigationItems"
import styled from "styled-components"
import variables from "../../../variables"

const SideDrawer = styled.div`
  top: 10vh;
  right: 0;
  bottom: 0;
  left: 130vw;
  position: fixed;
  display: flex;
  background-color: ${variables.darkColor};
  padding: 32px 0 0 0;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  transition: 350ms;
  z-index: 400;

  &.open {
    left: 60vw;
    transition: 350ms;
  }

  @media (min-width: 400px) {
    &.open {
      left: 20vw;
      transition: 450ms;
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`

const sidedrawer = props => {
  let attachedClasses = ["sideDrawer"]

  props.toggle
    ? (attachedClasses = ["sideDrawer", "open"])
    : (attachedClasses = ["sideDrawer"])

  return (
    <SideDrawer className={attachedClasses.join(" ")} onClick={props.onClick}>
      <NavigationItems />
    </SideDrawer>
  )
}

export default sidedrawer
