import React from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import { openModal } from '../../redux/actions/modal';

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(openModal());

  return <Header handleClick={handleClick} />;
};

export default HeaderContainer;
