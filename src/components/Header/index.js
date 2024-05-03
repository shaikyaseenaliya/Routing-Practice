import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <nav className="nav-bar">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1>Wave</h1>
      </div>
      <ul className="nav-contents-cont">
        <li className="route-link">
          <Link className="nav-content" to="/">
            Home
          </Link>
        </li>
        <li className="route-link">
          <Link className="nav-content" to="/about">
            About
          </Link>
        </li>
        <li className="route-link">
          <Link className="nav-content" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)
export default Header
