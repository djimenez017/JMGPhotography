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
    background: orange;
    top: 8vh;
    padding-right: 20px;
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
