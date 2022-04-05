import { React } from 'react';
import PropTypes from 'prop-types';

export function Rocket(props) {
  const { id, rocketName, description, image} = props;
  return (
    <div className="rocket">
      <div className="rocket-img">
        <img src={image} alt="rocket-img"/>
      </div>
      <h2>{rocketName}</h2>
      <p>Rocket id: {id}</p>
      <p>{description}</p>
    </div>
  );
}

Rocket.PropTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.integer.isRequired,
}
