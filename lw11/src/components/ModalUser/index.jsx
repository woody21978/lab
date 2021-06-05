import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import style from './index.module.scss';

const ModalUser = ({
  show,
  values,
  errors,
  touched,
  handleClose,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <Modal show={show} backdrop="static" onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>Добавить пользователя</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите Имя"
            name="name"
            className={touched.name && errors.name && 'is-invalid'}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <p className="text-danger">{errors.name}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите Email"
            name="email"
            className={touched.email && errors.email && 'is-invalid'}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className="text-danger">{errors.email}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Роль</Form.Label>
          <select
            className={
              touched.role && errors.role
                ? 'form-control is-invalid'
                : 'form-control'
            }
            name="role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Выберите роль</option>
            <option value={0}>User</option>
            <option value={1}>Admin</option>
          </select>

          {touched.role && errors.role && (
            <p className="text-danger">{errors.role}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Статус</Form.Label>
          <select
            className={
              touched.status && errors.status
                ? 'form-control is-invalid'
                : 'form-control'
            }
            name="status"
            value={values.status}
            onChange={handleChange}
          >
            <option>Выберите статус</option>
            <option value={1}>Активный</option>
            <option value={0}>Неактивный</option>
          </select>

          {touched.status && errors.status && (
            <p className="text-danger">{errors.status}</p>
          )}
        </Form.Group>
      </Form>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Добавить
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Закрыть
      </Button>
    </Modal.Footer>
  </Modal>
);

ModalUser.propTypes = {
  show: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  touched: PropTypes.shape({
    name: PropTypes.bool,
    email: PropTypes.bool,
    role: PropTypes.bool,
    status: PropTypes.bool,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ModalUser;
