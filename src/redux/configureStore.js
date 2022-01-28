import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
=======
import missionsReducer from './missions/missions';

const reducer = combineReducers({ missionsReducer });

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
>>>>>>> development
);

export default store;
