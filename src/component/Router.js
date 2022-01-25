import {
  BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom';
import Header from './Header';

const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
};

export default RouterApp;
