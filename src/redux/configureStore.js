import { combineReducers, createStore } from 'react-redux';
import { missionReducer } from './missions';
import { rocketsReducer } from './rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionReducer,
});

const store = createStore(rootReducer);

export default store;
