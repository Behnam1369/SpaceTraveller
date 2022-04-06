import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRocketData } from '../redux/rockets';

const RocketList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketData());
  }, []);

  const list = useSelector((state) => state.rockets);
  return (
    <div className="rocket-list">
      <h1>Rockets </h1>
      {list.map((el) => (
        <Rocket
          key={el.id}
          id={el.id}
          name={el.name}
          description={el.description}
          image={el.image}
        />
      ))}
    </div>
  );
};

export default RocketList;
