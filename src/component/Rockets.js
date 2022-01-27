import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRocket,
  reserveRocket,
  unreserveRocket,
  fetchRocketsApi
} from '../redux/reducers/rocket';
import Rockets from '../pages/rockets';

const RocketList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsApi());
  }, [dispatch]);

  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  // eslint-disable-next-line no-unused-vars
  const reserveRockets = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  // eslint-disable-next-line no-unused-vars
  const unReserveRockets = (e) => {
    dispatch(unreserveRocket(e.target.id));
  };

  return (
    <div>
      {rockets.map((rocket) => (
        <Rockets key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default RocketList;
