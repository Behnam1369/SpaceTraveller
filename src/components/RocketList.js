import React from 'react';
import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketList = (props) => {
  const { list } = props;
  return (
    <div className="rocket-list">
      <h1>Missions </h1>
      {list.map((el) => (
        <Rocket
          key={el.id}
          id={el.id}
          rocketName={el.rocket_name}
          description={el.description}
          image={el.flickr_images[0]}
        />
      ))}
    </div>
  );
};

RocketList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default RocketList;
