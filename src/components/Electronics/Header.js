import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="electronics-header-return">
      <Link to="/"><span className="electronics-header-name">
        Smooth Electronics</span></Link>

        <nav>
          <span className="electronics-nav-item">
            Mobile Phones</span> |&nbsp;
          <span className="electronics-nav-item">
            Headphones</span> |&nbsp;
          <span className="electronics-nav-item">
            Gaming</span> |&nbsp;
          <span className="electronics-nav-item">
            Home Theater</span> |&nbsp;
          <span className="electronics-nav-item">
            Appliances</span>
        </nav>
    </div>
  )
}

export default Header