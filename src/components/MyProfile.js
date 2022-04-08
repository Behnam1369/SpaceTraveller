import { React } from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  let joinedMissions = [];
  if (missions !== null) {
    joinedMissions = missions.filter((el) => el.joined);
  }
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="divs-const">
        <div className="profile-categories">
          {joinedMissions.length > 0
            ? (
              <>
                <h2>My Missions</h2>
                <ul>
                  {joinedMissions.map((el) => (
                    <li key={el.mission_id}>
                      {' '}
                      {el.mission_name}
                      {' '}
                    </li>
                  ))}
                </ul>
              </>
            )
            : <h2>You have not joined any missions yet.</h2>}
        </div>
        <div className="profile-categories">
          {reservedRockets.length > 0
            ? (
              <>
                <h2>My Rocket Reservations</h2>
                <ul>
                  {reservedRockets.map((el) => (
                    <li key={el.id}>
                      {' '}
                      {el.name}
                      {' '}
                    </li>
                  ))}
                </ul>
              </>
            )
            : <h2>You have not reserved any rocket yet.</h2>}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
