import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">DIANA NGUYEN</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)


export default Header
