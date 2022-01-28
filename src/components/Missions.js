import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MissionsList from '../pages/MissionList';
import { fetchDataRequest } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);
  return (
    <div>
      <MissionsList />
    </div>
  );
};
export default Missions;
