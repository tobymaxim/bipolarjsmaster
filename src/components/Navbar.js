import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
const Navbar = ({ data }) => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <li><Link className="menu-link" to={`/${item.title.toLowerCase()}`}>{item.title}</Link></li>))
        }
      </ul>
    </div>
  )
}
export default Navbar