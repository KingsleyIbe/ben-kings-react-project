import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <header className="container-fluid header">
    <div className="row no-guters">
      <div className="row col-6 no-guters">
        <img src={planet} alt="planet logo" className="col-2 img-fluid" />
        <h1 className="col-4 h5">Space Traveler&apos;s Hub</h1>
      </div>
      <nav className="col-6">
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
    </div>
  </header>
);

export default Header;
