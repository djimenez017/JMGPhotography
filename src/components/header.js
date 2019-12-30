import PropTypes from "prop-types"
import React from "react"

import NavigationBar from "./Navigation/NavigationBar"

const Header = ({ siteTitle }) => (
  <header>
    <NavigationBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
