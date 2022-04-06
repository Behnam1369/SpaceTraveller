/* eslint-disable prefer-destructuring */
const GETAPI = 'GET_API_DATA';
const ADDRESERVATION = 'ADD_ROCKET_RESERV';
const REMOVERESERVATION = 'REMOVE_ROCKET_RESERV';

export const apiData = (payload) => ({
  type: GETAPI,
  data: payload,
});

export const addReserv = (id) => ({
  type: ADDRESERVATION,
  data: id
})

export const removeReserv = (id) => ({
  type: REMOVERESERVATION,
  data: id
})

export const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GETAPI:
      return action.data;
    case ADDRESERVATION: {
      const newState = state.map((r) => {
        if (r.id !== action.data) {
          return r;
        }
        return { ...r, reserved: true };
      });
      return newState;
    }
    case REMOVERESERVATION: {
      const newState = state.map((r) => {
        if (r.id !== action.data) {
          return r;
        }
        return { ...r, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export const getRocketData = () => async (dispatch) => {
  const dataArr = [];
  const rawRockets = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await rawRockets.json();
  rockets.forEach((el) => {
    const rocket = {};
    rocket.id = el.id;
    rocket.name = el.rocket_name;
    rocket.description = el.description;
    rocket.image = el.flickr_images[0];
    rocket.reserved = false;
    dataArr.push(rocket);
  });
  dispatch(apiData(dataArr));
};
