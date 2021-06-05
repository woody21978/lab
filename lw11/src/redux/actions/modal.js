import { CLOSE_MODAL, OPEN_MODAL } from '../constants/modal';

export const openModal = () => ({ type: OPEN_MODAL, payload: true });
export const closeModal = () => ({ type: CLOSE_MODAL, payload: false });
