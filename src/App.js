import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MissionsList from './pages/MissionsList';
import MyProfile from './pages/MyProfile';
import ProfileRocketsDisplay from './components/ProfileRocketsDisplay';
import ProfileMissionsDisplay from './components/ProfileMissionsDisplay';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Missions />
      <Switch>
        <Route exact path="/rockets">
          <Rockets />
        </Route>
        <Route path="/missions">
          <MissionsList />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
        <Route path="/profile/myRockets">
          <ProfileRocketsDisplay />
        </Route>
        <Route path="/profile/myMissions">
          <ProfileMissionsDisplay />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
