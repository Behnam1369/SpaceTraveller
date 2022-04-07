import { React } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReserv, removeReserv } from '../redux/rockets';

function Rocket(props) {
  const {
    id, name, description, image, el,
  } = props;
  const dispatch = useDispatch();
  const reservButton = (element) => {
    if (element.reserved === false) {
      return <button className="reserv-btn add-btn" type="button" onClick={() => { dispatch(addReserv(element.id)); }}>Reserve now!</button>;
    }
    return <button className="reserv-btn rm-btn" type="button" onClick={() => { dispatch(removeReserv(element.id)); }}>Remove reservation</button>;
  };
  return (
    <div className="rocket">
      <div className="rocket-img">
        <img src={image} alt="rocket-img" />
      </div>
      <h2>{name}</h2>
      <p>
        Rocket id:
        {id}
      </p>
      <p>{description}</p>
      {reservButton(el)}
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  el: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default Rocket;
