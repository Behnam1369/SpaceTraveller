import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRocketData } from '../redux/rockets';

const RocketList = () => {
  const list = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (list.length === 0) {
      dispatch(getRocketData());
    }
  }, []);
  return (
    <div className="rocket-list">
      {list.map((el) => (
        <Rocket
          key={el.id}
          name={el.name}
          description={el.description}
          image={el.image}
          el={el}
        />
      ))}
    </div>
  );
};

export default RocketList;
