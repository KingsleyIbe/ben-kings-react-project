import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Navbar = () => (
  <nav className="header-navbar">
    <div className="logo">
      <img
        alt=""
        src={planet}
        width="50"
        height="50"
        className="header-logo"
      />
      <p className="space-travellers">Space Traveler&apos;s Hub</p>
    </div>
    <div className="header-nav">
      <ul className="header-nav_ul">
        <li className="rockets">
          <NavLink to="/" exact>Rockets</NavLink>
        </li>
        <li className="missions">
          <NavLink to="/Missions" exact>Missions</NavLink>
        </li>
        <li className="profile">
          <NavLink to="/Profile" exact>My Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
