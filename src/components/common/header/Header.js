import React from 'react'
import SearchBox from '../searchbox/SearchBox'

import style from "./Header.css"

const Header = (props) => (
  <header className="site-header" role="navigation">
    <div className="header-middle">
      <SearchBox {...props} />
    </div>
    <div className="header-right">
      <img className="header-logo" src="../../../../assets/images/dazn-logo.png" />
    </div>
  </header>
)

export default Header
