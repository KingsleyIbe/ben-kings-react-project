import React from 'react';
import PropTypes from 'prop-types';

export default function Rockets({ rocket }) {
  <div className='rocket'>
    <div>
      <img className="rocket-picture" src={rocket.flickr_images} alt={rocket.description} />
    </div>
    <div className="rocket-text">
      <h2 className="rocket-title"> {rocket.rocket_name} </h2>
      <p className="rocket-description"><span className="rocket-reserved">Reserved</span>{rocket.description}</p>
      <button type="button" className="rocket-button">Book Button</button>
    </div>
  </div>
}

Rockets.propTypes = {
  anyProp: PropTypes.any,
};
