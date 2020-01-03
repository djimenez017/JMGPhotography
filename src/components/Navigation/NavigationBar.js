import React, { useState } from "react"

import styled from "styled-components"
import NavigationItems from "./NavigationItems/NavigationItems"
import Hamburger from "./NavigationItems/HamburgerMenu/Hamburger"
import SideDrawer from "../Navigation/NavigationItems/HamburgerMenu/SideDrawer"

const NavigationBarStyle = styled.nav`
  background-color: orange;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

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
