import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const LinkItem = styled.li`
  background-color: pink;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    backgroundcolor: yellow;
    height: 100%;
    padding: 0 15px;
  }

  &:hover {
    background-color: yellow;
  }

  @media screen and (max-width: 499px) {
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }
`

const navigationItem = props => (
  <LinkItem>
    <Link to={props.to}>{props.children}</Link>
  </LinkItem>
)

export default navigationItem
