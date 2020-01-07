import React from "react"

import NavigationItem from "./NavigationItem/NavigationItem"
import styled from "styled-components"

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 499px) {
    align-content: center;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    height: 50%;
    top: 8vh;
    padding-right: 20px;
  }
`

const navigationItems = () => {
  return (
    <LinkList>
      <NavigationItem to={"/#home"}>Home</NavigationItem>
      <NavigationItem to={"/#services"}>Services</NavigationItem>
      <NavigationItem to={"/#about"}>About</NavigationItem>
      <NavigationItem to={"/#contact"}>Contact</NavigationItem>
    </LinkList>
  )
}

export default navigationItems
