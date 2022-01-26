import React from 'react';

const Rockets = ({rocket}) => {
  console.log(rocket)

  return (
    <div>
      <h1> {rocket.rocket_name} </h1>
      <h3> {rocket.rocket_type} </h3>
      <p>{rocket.success_rate_pct} % success rate</p>
      <img src={rocket.flickr_images} alt={rocket.description} width="200" />

    </div>
  )
};

export default Rockets;
