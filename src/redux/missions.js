const GETMISSIONS = 'space-traveller/missions/GET MISSIONS';
const SETLOADING = 'book-store/books/SET LOADING';
const JOINMISSION = 'book-store/books/JOIN MISSION';
const LEAVEMISSION = 'book-store/books/LEAVE MISSION';

const defaultState = {
  loading: true,
  missions: null,
  failureAPI: false,
};
export default function missionReducer(state = defaultState, action) {
  switch (action.type) {
    case GETMISSIONS:
      return { ...state, missions: action.missions };
    case SETLOADING:
      return { ...state, loading: action.loading };
    case JOINMISSION: {
      const newState = {
        ...state,
        missions: state.missions.map((el) => (
          el.mission_id === action.idMission
            ? { ...el, joined: true }
            : { ...el })),
      };
      return newState;
    }
    case LEAVEMISSION: {
      const newState = {
        ...state,
        missions: state.missions.map((el) => (
          el.mission_id === action.idMission
            ? { ...el, joined: false }
            : { ...el })),
      };
      return newState;
    }
    default:
      return state;
  }
}

export function setLoading(loading) {
  return { type: SETLOADING, loading };
}

export function getMissions() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    let missions = [];
    let failureAPI = false;
    let failureMessage = '';
    await fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        failureAPI = true;
        failureMessage = `Loading Failed. ${response}`;
        return null;
      })
      .then((result) => {
        missions = JSON.parse(result);
        return null;
      })
      .catch((error) => {
        failureAPI = true;
        failureMessage = `Loading Failed. ${error}`;
        return null;
      });
    dispatch(setLoading(false));
    dispatch({
      type: GETMISSIONS, missions, failureAPI, failureMessage,
    });
  };
}

export function joinMission(idMission) {
  return { type: JOINMISSION, idMission };
}

export function leaveMission(idMission) {
  return { type: LEAVEMISSION, idMission };
}
