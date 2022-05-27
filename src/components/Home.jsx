import React from 'react';
import space from '../assets/images/space1.jpg';

const Home = () => (
  <div className="relative home">
    <img src={space} alt="space traveler" className="w-[100vw] h-[100vh] opacity-[0.8]" />
    <div className="wrapper uppercase absolute top-[40%] left-[20%] text-[60px] text-center font-extrabold text-[#0d7bff]">
      <ul className="dynamic-txts">
        <li><span>Welcome To Space Traveler&#39;s Hub</span></li>
      </ul>
    </div>
    <h1 className="intro-text uppercase absolute top-[40%] left-[20%] text-[60px] text-center font-extrabold text-[#0d7bff]">Welcome To Space Traveler&#39;s Hub</h1>
  </div>
);

export default Home;
