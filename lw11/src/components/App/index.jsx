import React from 'react';
import Container from 'react-bootstrap/Container';

import HeaderContainer from '../../containers/HeaderContainer';
import TableUserContainer from '../../containers/TableUserContainer';
import ModalUserContainer from '../../containers/ModalUserContainer';

const App = () => (
  <Container>
    <HeaderContainer />
    <ModalUserContainer />
    <TableUserContainer />
  </Container>
);

export default App;
