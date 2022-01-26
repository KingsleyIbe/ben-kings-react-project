import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRocketsApi from '../redux/reducers/rocket';
import Rocket from '../component/Rockets'

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsApi());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {rockets.map((rocket) => {
          <Rocket
            id={rocket.id}
            name={rocket.name}
            type={rocket.type}
            img={rocket.flickr_images}
          />
        })}
      </ul>
    </div>
  )
};

export default Rockets;
