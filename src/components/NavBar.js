import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => (
  <nav className="header-navbar">
    <div className="logo">
      <img
        alt=""
        src={logo}
        width="35"
        height="35"
        className="header-logo"
      />

      Space Travelers Hub
    </div>
    <div className="header-nav">
      <ul className="header-nav_ul">
        <li className="rockets">
          <NavLink to="/" exact>Rockets</NavLink>
        </li>
        <li className="missions">
          <NavLink to="./missions/Missions" exact>Missions</NavLink>
        </li>
        <li className="profile">
          <NavLink to="/Profile" exact>My Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
