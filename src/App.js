import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Missions from './pages/missions';
import MyProfile from './pages/myProfile';
import Rockets from './pages/rockets';

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
    </div>
  );
};

export default App;
