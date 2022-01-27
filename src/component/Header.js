import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => {
  return (
    <header>
      <div>
        <img src={planet} alt="planet logo" />
         <h1>Space Traveler's Hub</h1>
      </div>
      <nav>
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
};

export default Header;
