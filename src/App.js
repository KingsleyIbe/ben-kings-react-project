<<<<<<< HEAD
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/Missions">
          <Missions />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  </Router>
=======
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/myProfile';
import Rockets from './pages/rockets';
import MissionList from './components/MissionList';
import './index.css';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<MissionList />} />
      <Route path="/myProfile" element={<MyProfile />} />
    </Routes>
  </div>
>>>>>>> development
);

export default App;
