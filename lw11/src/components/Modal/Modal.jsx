import React from 'react';
import './Modal.scss';

function Modal({ active, changeModalActive, children }) {
  return (
    <div
      aria-hidden="true"
      className={active ? 'modal active' : 'modal'}
      onClick={() => changeModalActive(active)}
    >
      <div
        aria-hidden="true"
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal__title">Добавить Пользователя</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
