import { combineReducers } from 'redux';
import iceCreamReducer from './iceCreamReducer';
import cakeReducer from './cakeReducer';
import userReducer from './userReducer';

export default combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});
