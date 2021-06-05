import * as Yup from 'yup';

export const validateFormUser = () =>
  Yup.object().shape({
    name: Yup.string().required('Заполните поля'),
    email: Yup.string()
      .email('Неверный формат Email')
      .required('Заполните поле'),
    role: Yup.string().required('Заполните поле'),
    status: Yup.string().required('Заполните поле'),
  });
