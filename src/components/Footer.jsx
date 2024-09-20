import React from 'react'
import{ Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
        <li><Link to="/posts/categories/ImamKhomeini">Imam Khomeini</Link></li>
        <li><Link to="/posts/categories/ImamKhamenei">Imam Khamenei</Link></li>
        <li><Link to="/posts/categories/Shohda">Shohda</Link></li>
        <li><Link to="/posts/categories/Palestine">Palestine</Link></li>
        <li><Link to="/posts/categories/Karbala">Karbala</Link></li>
        <li><Link to="/posts/categories/ImamReza">Imam Reza</Link></li>
        <li><Link to="/posts/categories/Prophets">Prophets</Link></li>
        <li><Link to="/posts/categories/Iran">Iran</Link></li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, The Muntazireen.</small>
      </div>
    </footer>
  )
}

export default Footer