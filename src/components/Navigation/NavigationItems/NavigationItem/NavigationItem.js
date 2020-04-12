import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import variables from "../../../variables"

const LinkItem = styled.li`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    height: 100%;
    padding: 20px 0;
  }

  &:hover {
    color: ${variables.accentColor};
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
    <Link to={props.to} onClick={props.onClick}>
      {props.children}
    </Link>
  </LinkItem>
)

export default navigationItem
