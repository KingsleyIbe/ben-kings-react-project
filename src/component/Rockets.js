import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsApi } from '../redux/reducers/rocket';
import Rockets from '../pages/rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsApi());
  }, [dispatch]);

  return (
    <div>
      {rockets.map((rocket) => (
        <Rockets key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default RocketList;
