import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Header = ({ handleClick }) => (
  <>
    <div className="row align-items-center mb-1">
      <Col md={10}>
        <h1>Пользователи</h1>
      </Col>
      <Col>
        <Button variant="primary" className="w-100" onClick={handleClick}>
          Добавить
        </Button>
      </Col>
    </div>
  </>
);

Header.defaultProps = {
  handleClick: false,
};

Header.propTypes = {
  handleClick: PropTypes.func,
};

export default Header;
