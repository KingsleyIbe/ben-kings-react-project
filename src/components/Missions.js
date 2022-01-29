import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataRequest } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);
  return (
    <></>
  );
};

export default Missions;
