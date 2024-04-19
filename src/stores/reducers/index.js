import { combineReducers } from 'redux';
import rootReducer from './sources/contact'

const storeReducer = combineReducers({
  root: rootReducer,
});

export default storeReducer;
