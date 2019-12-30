import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const LinkItem = styled.li`
  background-color: pink;
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
  }

  &:hover {
    background-color: yellow;
  }
`

const navigationItem = props => (
  <LinkItem>
    <Link to={props.to}>{props.children}</Link>
  </LinkItem>
)

export default navigationItem
