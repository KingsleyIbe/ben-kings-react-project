import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <img src="../images/planet.png" alt="planet logo"></img>
        <h1>Space Traveler's Hub</h1>
      </div>
      <nav>
        <NavLink 
          className="nav-item" 
          activeClassName="active" 
          to="/" 
          exact
          >
            {' '} 
            Rockets 
            {' '}
            </NavLink>
        <NavLink 
          className="nav-item" 
          activeClassName="active" 
          to="/missions" 
          exact
          >
            {' '} 
            Missions 
            {' '}
            </NavLink>
        <NavLink 
          className="nav-item" 
          activeClassName="active" 
          to="/myProfile" 
          exact
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
