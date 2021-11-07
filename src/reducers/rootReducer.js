import { combineReducers } from 'redux';
import iceCreamReducer from './iceCreamReducer';
import cakeReducer from './cakeReducer';

export default combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
