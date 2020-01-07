import React, { useState } from "react"

import styled from "styled-components"
import NavigationItems from "./NavigationItems/NavigationItems"
import Hamburger from "./NavigationItems/HamburgerMenu/Hamburger"
import SideDrawer from "../Navigation/NavigationItems/HamburgerMenu/SideDrawer"
import variables from "../variables"

const NavigationBarStyle = styled.nav`
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  background-color: ${variables.darkColor};
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 499px) {
    .deskTop {
      display: none;
    }
  }
`

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <NavigationBarStyle>
      <h1>JMG Photography</h1>
      <Hamburger clicked={() => setToggle(!toggle)} />
      {toggle ? <SideDrawer toggle={toggle} /> : console.log("closed")}
      <nav className={"deskTop"}>
        <NavigationItems />
      </nav>
    </NavigationBarStyle>
  )
}

export default NavigationBar
