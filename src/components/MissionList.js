import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { getMissions } from '../redux/missions';

function MissionList() {
  const {
    loading, missions, failureAPI,
  } = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missions === null) {
      dispatch(getMissions());
    }
  }, []);

  let missionList = '';
  if (loading) {
    missionList = <tr><td colSpan={4}>Loading...</td></tr>;
  } else if (failureAPI) {
    missionList = <tr><td colSpan={4}>OOPS! SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.</td></tr>;
  } else if (missions.length === 0) {
    missionList = <tr><td colSpan={4}>There is no book in the list yet.</td></tr>;
  } else {
    missionList = missions.map((el) => (
      <Mission
        key={el.mission_id}
        id={el.mission_id}
        description={el.description}
        name={el.mission_name}
        joined={el.joined}
      />
    ));
  }
  return (
    <table className="missionList">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missionList}
      </tbody>
    </table>
  );
}

export default MissionList;
