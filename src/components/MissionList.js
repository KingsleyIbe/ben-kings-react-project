import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchMissionApi } from '../redux/missions/missions';
import Missions from '../pages/Missions';

const MissionList = () => {
  const missions = useSelector((state) => state.missionsReducer.missions)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionApi());
  }, [dispatch]);


  return (
    <div>
      {missions.map((mission) => (
        <Missions key={mission.mission_id} mission={mission} />
      ))}
    </div>
  )
}

export default MissionList;
