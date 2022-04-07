import { React } from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  console.log(missions);
  const joinedMissions = missions.filter((el) => el.joined);
  console.log(joinedMissions);
  return (
    <>
      <h1>Hello from My Profile</h1>

      <div className="JoinedMissions">
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
    </>
  );
}

export default MyProfile;
