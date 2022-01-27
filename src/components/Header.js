import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <header className="header">
    <div className="logo-text">
      <img src={planet} alt="planet logo" className="logo" />
      <h1>Space Traveler&#8217;s Hub</h1>
    </div>
    <nav className="navItems">
      <NavLink
        className="nav-item"
        to="/"
      >
        {' '}
        Rockets
        {' '}
      </NavLink>
      <NavLink
        className="nav-item"
        to="/missions"
      >
        {' '}
        Missions
        {' '}
      </NavLink>
      <NavLink
        className="nav-item"
        to="/myProfile"
      >
        {' '}
        My Profile
        {' '}
      </NavLink>
    </nav>
  </header>
);

export default Header;
