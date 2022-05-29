import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRocket,
  reserveRocket,
  unreserveRocket,
} from '../redux/rockets/rockets';

const RocketsCards = () => {
  const dispatch = useDispatch();
  const fetchApi = 'https://api.spacexdata.com/v3/rockets';

  const myRocketArray = useSelector((state) => state.rockets);

  useEffect(() => {
    const apiRockets = async () => {
      const fetchRockets = await fetch(fetchApi);
      const rockets = await fetchRockets.json();
      return dispatch(getRocket(rockets));
    };
    if (myRocketArray.length === 0) {
      apiRockets();
    }
  }, []);

  const reserveRockets = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  const unReserveRockets = (e) => {
    dispatch(unreserveRocket(e.target.id));
  };

  return (
    <div className="rocket-card">
      {myRocketArray.map((rocket) => (
        <div key={rocket.id} className="rockets-div">
          <div className="rocket-imgs">
            <img
              src={rocket.flickr_images}
              alt={rocket.rocket_name}
              className="header-logo rocket-img max-w-[200px] max-h-[200px]"
              // eslint-disable-next-line react/jsx-no-duplicate-props
            />
          </div>
          <div className="rockets-desc">
            <h3 className="rockets-desc-title font-bold">{rocket.rocket_name}</h3>
            <p className="rockets-desc-p py-2">
              {rocket.reserved ? (
                <button
                  type="button"
                  className="reserved-span rocktbtn p-2 mr-2"
                  title="button"
                >
                  Reserved
                </button>
              ) : null}
              {rocket.description}
            </p>
            {rocket.reserved && (
              <button
                type="button"
                title="button"
                onClick={unReserveRockets}
                id={rocket.id}
                className="unreserve-btn rocktbtn "
              >
                Cancel Reservation
              </button>
            )}
            {!rocket.reserved && (
              <button
                type="button"
                title="button"
                className="rockets-desc-btn rocktbtn mt-2"
                onClick={reserveRockets}
                id={rocket.id}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsCards;
