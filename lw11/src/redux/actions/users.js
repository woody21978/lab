import { ADD_USER } from '../constants/users';

export const addUser = (data) => ({ type: ADD_USER, payload: data });
