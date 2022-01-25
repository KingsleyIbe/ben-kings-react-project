import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Rockets from '../pages/rockets';
import Missions from '../pages/missions';
import MyProfile from '../pages/myProfile';

const App = () => {
  return (
    <Router>
      < Header /> 
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />}/>
        <Route path="/MyProfile" element={<MyProfile />}/>
      </Routes>
    </Router>
  );
};

export default App;
