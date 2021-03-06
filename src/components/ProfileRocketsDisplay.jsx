import React from 'react';
import { useSelector } from 'react-redux';

const ProfileRocketsDisplay = () => {
  const myRocketArray = useSelector((state) => state.rockets);

  return (
    <div>
      <ul>
        {myRocketArray.filter((rocket) => rocket.reserved).map((rocket) => (
          <div key={rocket.id}>
            <li className="profile-rocket-name text-[#0d7bff] mb-3 w-[100%]">{rocket.rocket_name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProfileRocketsDisplay;
