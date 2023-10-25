import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Use Redux Thunk middleware for async actions
import greetingReducer from './reducers/greetingReducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
