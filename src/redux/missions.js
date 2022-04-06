const GETMISSIONS = 'space-traveller/missions/GET MISSIONS';
const SETLOADING = 'book-store/books/SET LOADING';

const defaultState = {
  loading: false,
  missions: [
    { mission_id: '9D1B7E0', mission_name: 'Thaicom', description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.' },
    { mission_id: 'F4F83DE', mission_name: 'Telstar', description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.' },
  ],
  failureAPI: false,
};
export default function missionReducer(state = defaultState, action) {
  switch (action.type) {
    case GETMISSIONS:
      return { ...state, missions: action.missions };
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
