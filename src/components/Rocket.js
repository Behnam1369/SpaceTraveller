import { React } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReserv, removeReserv } from '../redux/rockets';

function Rocket(props) {
  const {
    name, description, image, el,
  } = props;
  const dispatch = useDispatch();
  const reservButton = (element) => {
    if (element.reserved === false) {
      return <button className="reserv-btn add-btn" type="button" data-testid="quit" onClick={() => { dispatch(addReserv(element.id)); }}>Reserve now!</button>;
    }
    return <button className="reserv-btn rm-btn" type="button" onClick={() => { dispatch(removeReserv(element.id)); }}>Remove reservation</button>;
  };

  return (
    <div className="rocket-card">
      <div className="rocket-img">
        <img src={image} className="rocket-img-src" alt="rocket-img" />
      </div>
      <div className="rocket-content">
        <h2>{name}</h2>
        <p>
          {el.reserved === true ? <span className="reserve-span" data-testid="teal">reserved</span> : null}
          {description}
        </p>
        {reservButton(el)}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  el: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default Rocket;
