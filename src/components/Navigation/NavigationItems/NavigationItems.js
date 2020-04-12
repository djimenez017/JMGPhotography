import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import styled from "styled-components"

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    text-align: right;
    padding-right: 30px;
  }
`

const navigationItems = () => {
  return (
    <LinkList>
      <NavigationItem to="#home">Home</NavigationItem>
      <NavigationItem to="#">Gallery</NavigationItem>
      <NavigationItem to="#about">About</NavigationItem>
      <NavigationItem to="#latest">Latest Instagram</NavigationItem>
    </LinkList>
  )
}

export default navigationItems
