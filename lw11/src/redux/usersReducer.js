import { CREATE_USER } from './types';

const initialState = {
  users: [
    {
      name: 'Артём',
      email: 'email@email.com',
      access: 'Администратор',
      status: 'Активен',
    },
    {
      name: 'WooDy',
      email: 'woody@woody.com',
      access: 'Пользователь',
      status: 'Активен',
    },
  ],
};
const usersReducer = function (state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, state.users.concat([action.payload])],
      };
    // return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};
export default usersReducer;
