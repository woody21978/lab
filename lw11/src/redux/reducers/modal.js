import { OPEN_MODAL, CLOSE_MODAL } from '../constants/modal';

const initialValues = {
  isOpen: false,
};

const modalReducer = (state = initialValues, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      console.log(action.payload);
      return { ...state, isOpen: action.payload };
    case CLOSE_MODAL:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
