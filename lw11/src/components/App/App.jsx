import React from 'react';
import 'reset-css';
import './App.scss';
import Button from '../Button/Button';
import Table from '../../containers/TableContainer';
// import Modal from '../Modal/Modal';

export default function App({ children, changeModalActive, statusModal }) {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="header__title">Пользователи:</h1>
          <Button
            type="primary"
            text="Добавить"
            changeModalActive={changeModalActive}
            status={statusModal}
          />
        </div>
        <Table />
      </div>
      {children}
    </>
  );
}
