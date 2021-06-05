import { combineReducers } from 'redux';

import modalReducer from './modal';
import usersReducer from './users';

const rootReducer = combineReducers({
  users: usersReducer,
  modal: modalReducer,
});

export default rootReducer;
