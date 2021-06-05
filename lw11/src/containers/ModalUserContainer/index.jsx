import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { addUser } from '../../redux/actions/users';
import { validateFormUser } from '../../utils/validation';
import ModalUser from '../../components/ModalUser';
import { closeModal } from '../../redux/actions/modal';

const ModalUserContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    role: '',
    status: '',
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(addUser(values));
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validateFormUser,
    onSubmit,
  });

  const show = useSelector((state) => state.modal.isOpen);

  const handleClose = () => dispatch(closeModal());

  return (
    <ModalUser
      show={show}
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      isSubmitting={formik.isSubmitting}
      handleClose={handleClose}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
    />
  );
};

export default ModalUserContainer;
