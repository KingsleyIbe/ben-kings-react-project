import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileMissionsDisplay from './ProfileMissionsDisplay';
import ProfileRocketsDisplay from './ProfileRocketsDisplay';

const Profile = () => (
  <div className="border-2 border-black p-10 m-auto w-[50%] mt-[100px]">
    <div className="profile-section">
      <div className="my-missions-profile">
        <NavLink to="/profile/myMissions">
          <h2 className="profile-headers font-bold text-[#0d7bff] mb-10 text-[22px]">My Missions</h2>
        </NavLink>
        <ProfileMissionsDisplay />
      </div>
      <div className="my-rockets-profile">
        <NavLink to="/profile/myRockets">
          <h2 className="profile-headers font-bold text-[#0d7bff] mb-10 text-[22px]">My Rockets</h2>
        </NavLink>
        <ProfileRocketsDisplay />
      </div>
    </div>
  </div>
);

export default Profile;
