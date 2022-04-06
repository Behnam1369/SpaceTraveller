import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions';
import { rocketsReducer } from './rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
