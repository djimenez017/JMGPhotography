import React from "react"
import NavigationItems from "../NavigationItems"
import styled from "styled-components"

const SideDrawer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 500px;
  height: 92vh;
  overflow: hidden;
  left: 0;
  top: 8vh;
  margin: 0 auto;
  background-color: green;
  padding: 32px 0 0 0;
  transition: transform 0.5s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;

  @media (min-width: 500px) {
    display: none;
  }
  .open {
    transform: translateX(0);
  }

  .close {
    transform: translateX(-100%);
  }
`

const sidedrawer = props => {
  let attachedClasses = ["sideDrawer", "close"]
  if (props.toggle) {
    attachedClasses = ["sideDrawer", "open"]
  }

  return (
    <SideDrawer className={attachedClasses.join(" ")}>
      <NavigationItems />
    </SideDrawer>
  )
}

export default sidedrawer

//{attachedClasses.join(" ")}
