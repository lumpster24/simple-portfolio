import React from 'react'
import { Link } from 'react-router-dom'

import links from '../../data/links'


const Header = () => {
  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <Link to={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Header;