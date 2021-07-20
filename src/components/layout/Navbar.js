import React from 'react';
import { Link } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './Navbar.module.css'

const NavBar = ({ children }) => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}


export default NavBar;