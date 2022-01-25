import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from '../pages/rockets';
import Missions from '../pages/missions';
import MyProfile from '../pages/myProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/" element={<Missions />}/>
        <Route path="/" element={<MyProfile />}/>
      </Routes>
    </Router>
  );
};

export default App;
