import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const TableUser = ({ users }) => (
  <Row>
    <Col>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Email</th>
            <th>Права</th>
            <th>Статус</th>
          </tr>
        </thead>
        {users.length > 0 ? (
          <tbody>
            {users.map((user) => (
              <tr key={1}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role ? 'Админ' : 'Пользователь'}</td>
                <td>{user.status ? 'Активный' : 'Неактивный'}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <p className="text-center w-100">Список пользователей пуст</p>
        )}
      </Table>
    </Col>
  </Row>
);

TableUser.defaultProps = {
  users: false,
};

TableUser.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      role: PropTypes.number,
      status: PropTypes.number,
    })
  ),
};

export default TableUser;
