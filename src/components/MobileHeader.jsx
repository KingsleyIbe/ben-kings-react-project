import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileHeader = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (

    <div className="header-mobile-container bg-[#0d7bff] text-[#fff] px-10">
      <header className="header-mobile">
        <span className="header-logo flex gap-10 items-center">
          <div className="logo1 grid my-5">
            <FontAwesomeIcon icon={faSpaceShuttle} className="header-logo text-[30px] mb-2" />
            <p className="space-travellers text-[10px]">Space Traveler&apos;s Hub</p>
          </div>
          <button type="button">
            <FontAwesomeIcon icon={faBars} className="fa-bars" onClick={openMenu} />
          </button>
        </span>
        {menu && (
          <nav className="nav-mobile menu">
            <ul>
              <li className="rockets">
                <NavLink to="/rockets" exact>Rockets</NavLink>
              </li>
              <li className="missions">
                <NavLink to="/missions" exact>Missions</NavLink>
              </li>
              <li className="profile">
                <NavLink to="/profile" exact>My Profile</NavLink>
              </li>
              <li>
                <span className="mt-5 span-item">
                  <button
                    type="button"
                    className="border-2 border-[#E4C170] rounded-[40px] px-10 py-2 font-medium text-[20px]"
                  >
                    <a href="#subscribe" className="link">Subscribe</a>
                  </button>
                </span>
              </li>
            </ul>

          </nav>

        )}
      </header>
    </div>
  );
};

export default MobileHeader;
