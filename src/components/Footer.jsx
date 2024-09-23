import React from 'react'
import{ Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
        <li><Link to="/posts/categories/ImamKhomeini">Imam Khomeini</Link></li>
        <li><Link to="/posts/categories/ImamKhamenei">Imam Khamenei</Link></li>
        <li><Link to="/posts/categories/Palestine">Palestine</Link></li>
        <li><Link to="/posts/categories/CurrentAffairs">Current Affairs</Link></li>
        <li><Link to="/posts/categories/India">India</Link></li>
        <li><Link to="/posts/categories/Hijab">Hijab</Link></li>
        <li><Link to="/posts/categories/MiddleEast">Middle East</Link></li>
        <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, The Muntazireen.</small>
      </div>
    </footer>
  )
}

export default Footer