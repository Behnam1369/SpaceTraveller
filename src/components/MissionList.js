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
    missionList = <h3>Loading...</h3>;
  } else if (failureAPI) {
    missionList = <h3>OOPS! SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.</h3>;
  } else if (missions.length === 0) {
    missionList = <h3>There is no book in the list yet.</h3>;
  } else {
    missionList = missions.map((el) => (
      <Mission
        key={el.mission_id}
        description={el.description}
        name={el.mission_name}
      />
    ));
  }
  return (
    <div className="missionList">
      {missionList}
    </div>
  );
}

export default MissionList;
