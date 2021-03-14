import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
// export const rootReducer = combineReducers({
//   users: usersReducer,
// });
