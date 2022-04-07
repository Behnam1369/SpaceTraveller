import { React } from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((el) => el.joined);
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="joinedMissions">
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
    </div>
  );
}

export default MyProfile;
