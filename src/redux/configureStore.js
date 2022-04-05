import { missionReducer } from './missions';
import { rocketsReducer } from './rockets';
import { combineReducers, createStore } from 'react-redux';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionReducer
})

const store = createStore(rootReducer);

export default store;