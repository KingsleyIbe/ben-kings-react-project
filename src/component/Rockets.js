import React from 'react';
import { useDispatch } from 'react-redux';

const Rocket = ({
  id, name, type, flickr_images,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1> {name} </h1>
      <h3> {type} </h3>
      <img src={flickr_images} />
    </div>
  );
};

export default Rocket;
