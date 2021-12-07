import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { palindromeReducer } from './text.reducers';

const rootReducer = combineReducers({
  palindrome: palindromeReducer
});

const middlewares = [thunk];
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), composeEnhancers())
);

export default store;