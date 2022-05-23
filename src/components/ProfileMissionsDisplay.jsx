import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMissionsDisplay = () => {
  const data = useSelector((state) => state.missions);

  return (
    <div>
      <ul>
        {data.filter((mission) => mission.joined).map((mission) => (
          <div key={mission.mission_id}>
            <li className="profile-rocket-name text-[#0d7bff] mb-3">{mission.mission_name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMissionsDisplay;
