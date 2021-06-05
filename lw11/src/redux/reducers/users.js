import { ADD_USER } from '../constants/users';

const initialValues = {
  data: [
    {
      id: 1,
      name: 'Артём',
      email: 'tema@mail.ru',
      role: '1',
      status: '0',
    },
  ],
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default userReducer;
