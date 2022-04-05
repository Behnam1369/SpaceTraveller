import { React } from 'react';
import PropTypes from 'prop-types';

function Rocket(props) {
  const {
    id, rocketName, description, image,
  } = props;
  return (
    <div className="rocket">
      <div className="rocket-img">
        <img src={image} alt="rocket-img" />
      </div>
      <h2>{rocketName}</h2>
      <p>
        Rocket id:
        {id}
      </p>
      <p>{description}</p>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

};

export default Rocket;
