// Kevin issue no 22
import React from 'react';
import ProfileMissionsDisplay from './ProfileMissionsDisplay';
import ProfileRocketsDisplay from './ProfileRocketsDisplay';

const Profile = () => (
  <div>
    <div className="profile-section">
      <div className="my-missions-profile">
        <h2 className="profile-headers">My Missions</h2>
        <ProfileMissionsDisplay />
      </div>
      <div className="my-rockets-profile">
        <h2 className="profile-headers">My Rockets</h2>
        <ProfileRocketsDisplay />
      </div>
    </div>
  </div>
);

export default Profile;
