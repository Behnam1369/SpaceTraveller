import React from 'react';
import {Rocket} from './Rocket'

export const RocketList = (list) => {
  return (
    <div className="rocket-list">
      <h1>Missions </h1>
      {list.map((r) => {
        <Rocket id={r.id} rocketName={r.rocket_name} description={r.description} image={r.flickr_images[0]} />
      })}
    </div>
  );
};
