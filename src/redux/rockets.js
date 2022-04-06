/* eslint-disable prefer-destructuring */
const GETAPI = 'GET_API_DATA';

export const apiData = (payload) => ({
  type: GETAPI,
  data: payload,
});

export const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GETAPI:
      return action.data;
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
    dataArr.push(rocket);
  });
  dispatch(apiData(dataArr));
};
