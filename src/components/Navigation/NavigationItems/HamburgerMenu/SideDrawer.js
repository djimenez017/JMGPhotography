import React from "react"
import NavigationItems from "../NavigationItems"
import styled from "styled-components"
import variables from "../../../variables"

const SideDrawer = styled.div`
  top: 7vh;
  right: 0;
  bottom: 0;
  left: 130vw;
  position: fixed;
  display: flex;
  background: ${variables.darkColor};
  padding: 32px 0 0 0;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  transition: 350ms;
  z-index: 400;

  &.open {
    left: 40vw;
    transition: 350ms;
  }

  @media (max-width: 400px) {
    &.open {
      left: 13vw;
      transition: 450ms;
    }
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
      <footer>© {new Date().getFullYear()}, JMG Photography</footer>
    </SideDrawer>
  )
}

export default sidedrawer
