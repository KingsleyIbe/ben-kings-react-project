import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Missions from './pages/missions';
import MyProfile from './pages/myProfile';
import RocketList from './component/Rockets';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<RocketList />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
    </div>
  );
};

export default App;
