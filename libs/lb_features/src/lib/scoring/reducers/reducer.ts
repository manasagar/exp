// reducers.ts
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todosReducer from './todosReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
  user: userReducer,
  // Add more reducers as needed
});

export default rootReducer;
