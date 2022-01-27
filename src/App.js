import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';
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
);

export default App;
