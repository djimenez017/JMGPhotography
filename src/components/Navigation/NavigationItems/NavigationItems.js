import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import NavigationItem from "./NavigationItem/NavigationItem"
import styled from "styled-components"

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 499px) {
    align-content: center;
    flex-direction: column;
    justify-content: center;
  }
`

const navigationItems = () => {
  return (
    <LinkList>
      <NavigationItem to="#home">Home</NavigationItem>
      <NavigationItem to="#about">About</NavigationItem>
      <NavigationItem to="#latest">About</NavigationItem>
    </LinkList>
  )
}

export default navigationItems
