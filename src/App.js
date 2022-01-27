import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './component/Header';
import Rockets from './component/Rockets';
import Missions from './component/Missions';
import Profile from './component/Profile';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/">
          <Missions />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
