import { React } from 'react';
import PropTypes from 'prop-types';

function Mission(props) {
  const { name, description } = props;

  return (
    <div className="mission">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
