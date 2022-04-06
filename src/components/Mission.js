import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions';

function Mission(props) {
  const {
    id, name, description, joined,
  } = props;
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  const handleContribution = () => {
    if (!joined) {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  // description.split(' ').filter((el, i) => i < 50).join(' ')

  return (
    <tr className="mission">
      <td>{name}</td>
      {
        expanded || description.split(' ').length < 70
          ? (
            <td>
              {' '}
              {description}
              {' '}
            </td>
          )
          : (
            <td>
              {`${description.split(' ').filter((el, i) => i < 50).join(' ')} ...`}
              <button type="button" onClick={handleReadMore}>Read more</button>
            </td>
          )
      }
      <td>
        <span className={joined ? 'joined' : ''}>
          {' '}
          {joined ? 'Active Member' : 'NOT A MEMBER'}
          {' '}
        </span>
      </td>
      <td>
        <button type="button" className={joined ? 'joined' : ''} onClick={handleContribution}>
          {joined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool,
};

Mission.defaultProps = {
  joined: false,
};

export default Mission;
