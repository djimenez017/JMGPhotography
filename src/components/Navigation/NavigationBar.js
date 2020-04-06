import React, { useState } from "react"

import styled from "styled-components"
import NavigationItems from "./NavigationItems/NavigationItems"
import Hamburger from "./NavigationItems/HamburgerMenu/Hamburger"
import SideDrawer from "../Navigation/NavigationItems/HamburgerMenu/SideDrawer"
import variables from "../variables"

const NavigationBarStyle = styled.nav`
  box-sizing: border-box;
  height: 100vh;
  background: black;
  width: 25%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  h1 {
    box-sizing: border-box;
    text-align: center;
    padding: 20px 0;
  }

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
