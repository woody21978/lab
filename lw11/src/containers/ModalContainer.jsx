import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';

function ModalContainer() {
  const [modalActive, setModalActive] = useState(false);
  return <Modal active={modalActive} setActive={setModalActive} />;
}

export default ModalContainer;
