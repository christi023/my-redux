import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
//import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

//const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
