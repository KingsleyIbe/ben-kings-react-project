/* eslint-disable react/prop-types */
import React from 'react';

const Missions = ({ mission }) => (
  <div>
    <h1>{mission.mission_name}</h1>
    <p>{mission.description}</p>
  </div>
);

export default Missions;
