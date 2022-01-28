import React from 'react';
import {
  BrowserRouter as Router,
<<<<<<< HEAD
  Outlet,
=======
  Routes,
>>>>>>> aeac5c79a69d497737e05c34496c3a3a662a3ac5
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const App = () => (
  <Router>
    <div className="app">
      <Header />
<<<<<<< HEAD
      <Outlet>
=======
      <Routes>
>>>>>>> aeac5c79a69d497737e05c34496c3a3a662a3ac5
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/">
          <Missions />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
<<<<<<< HEAD
      </Outlet>
=======
      </Routes>
>>>>>>> aeac5c79a69d497737e05c34496c3a3a662a3ac5
    </div>
  </Router>
);

export default App;
