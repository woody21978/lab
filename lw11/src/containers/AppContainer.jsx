import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../redux/actions';
import App from '../components/App/App';
import Modal from '../components/Modal/Modal';
import Form from '../components/Form/Form';

function AppContainer() {
  const [modalActive, setModalActive] = useState(false);
  const changeModalActive = (status) => {
    setModalActive(!status);
  };
  return (
    <App changeModalActive={changeModalActive} statusModal={modalActive}>
      <Modal active={modalActive} changeModalActive={changeModalActive}>
        <Form />
      </Modal>
    </App>
  );
}

const mapDispatchProps = {
  createUser,
};
export default connect(null, mapDispatchProps)(AppContainer);
