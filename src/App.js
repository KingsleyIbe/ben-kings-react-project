import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/myProfile';
import Rockets from './pages/rockets';
import MissionList from './components/MissionList'

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<MissionList />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
    </div>
  );
};

export default App;
