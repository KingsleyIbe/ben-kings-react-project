import React from 'react';
import {
  BrowserRouter as Router,
  Outlet,
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
      <Outlet>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/">
          <Missions />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Outlet>
    </div>
  </Router>
);

export default App;
