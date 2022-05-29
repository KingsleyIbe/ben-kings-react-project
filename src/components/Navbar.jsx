import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="header header-navbar text-[#fff]">
    <Link to="/" className="logo">
      <FontAwesomeIcon icon={faSpaceShuttle} className="text-[50px]" />
      <p className="space-travellers">Space Traveler&apos;s Hub</p>
    </Link>
    <div className="header-nav">
      <ul className="header-nav_ul text-[20px]">
        <li className="rockets">
          <NavLink to="/rockets" exact>Rockets</NavLink>
        </li>
        <li className="missions">
          <NavLink to="/missions" exact>Missions</NavLink>
        </li>
        <li className="profile">
          <NavLink to="/profile" exact>My Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
