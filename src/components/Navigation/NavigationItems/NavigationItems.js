import React from "react"

import NavigationItem from "./NavigationItem/NavigationItem"
import styled from "styled-components"

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: blue;
  width: 35%;
  height: 100%;

  @media screen and (max-width: 499px) {
    display: none;
  }
`

const navigationItems = () => {
  return (
    <LinkList>
      <NavigationItem to={"/"}>Home</NavigationItem>
      <NavigationItem to={"page-2"}>Gallery</NavigationItem>
      <NavigationItem to={"page-2"}>Contact</NavigationItem>
    </LinkList>
  )
}

export default navigationItems
