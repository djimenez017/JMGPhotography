import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import NavigationItems from "./NavigationItems/NavigationItems"
import Hamburger from "./NavigationItems/HamburgerMenu/Hamburger"
import SideDrawer from "../Navigation/NavigationItems/HamburgerMenu/SideDrawer"

const NavigationBarStyle = styled.nav`
  box-sizing: border-box;
  height: 100vh;
  background: black;
  width: 25%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 300;

  h1 {
    box-sizing: border-box;
    text-align: center;
    padding: 20px 0;
  }

  @media (max-width: 1000px) {
    height: 7vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .deskTop {
      display: none;
    }
  }
`

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <NavigationBarStyle>
      <h1>
        <Link to="/">JMG Photography</Link>
      </h1>
      <Hamburger onClick={() => setToggle(!toggle)} />
      <SideDrawer toggle={toggle} onClick={() => setToggle(!toggle)} />
      <nav className={"deskTop"}>
        <NavigationItems />
      </nav>
      <footer>© {new Date().getFullYear()}, JMG Photography</footer>
    </NavigationBarStyle>
  )
}

export default NavigationBar
