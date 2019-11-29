window.onload = () => {
  let checkValidation = document.querySelector('.btn'),
   errorText = document.querySelectorAll('span'),
    errorFio = document.querySelector('.form-input_error-fio'),
    errorPassword = document.querySelector('.form-input_error-password'),
    errorEmail = document.querySelector('.form-input_error-email'),
    errorCity = document.querySelector('.form-input_error-city'),
    field = document.querySelectorAll('input'),
    fio = document.querySelector('.fio'),
    password = document.querySelector('.password'),
    mail = document.querySelector('.email'),
    city = document.querySelector('.city-select');
  checkValidation.addEventListener('click', function (e) {
    e.preventDefault();
    removeError();
    for (i = 0; i < field.length; i++) {
      if (!field[i].value) {
        field[i].classList.remove('success');
        field[i].classList.add('fail');
        errorText[i].innerHTML = 'Заполните поле';
      }
    }
    if (fio) {
      if (!(/([А-ЯЁ][а-яё]+[\-\s]?){3,}/).test(fio.value)) {
        fio.classList.remove('success');
        fio.classList.add('fail');
        errorFio.innerHTML = 'Введите в формате: Фамилия Имя Отчество';
      } else {
        errorFio.innerHTML = '';
        fio.classList.remove('fail');
        fio.classList.add('success');
      }
    }
    if (password) {
      if (!(/[0-9a-zA-Z!@#$%^&*]{6,}/).test(password.value)) {
        password.classList.remove('success');
        password.classList.add('fail');
        errorPassword.innerHTML = 'Не соблюдены правила. Проверьте раскладку клавиатуры';
        if (password.value.length < 6) {
          errorPassword.innerHTML = 'Парль должен содержать не менее 6 символов';
        }
      } else {
        errorPassword.innerHTML = '';
        password.classList.remove('fail');
        password.classList.add('success');
      }
    }
    if (mail) {
      if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/).test(mail.value)) {
        mail.classList.remove('success');
        mail.classList.add('fail');
        errorEmail.innerHTML = 'Неправильно введено имя почты';
      } else {
        errorEmail.innerHTML = '';
        mail.classList.remove('fail');
        mail.classList.add('success');
      }
    }
    if (city) {
      if (city.value != 'none') {
        errorCity.innerHTML = '';
        city.classList.remove('fail');
        city.classList.add('success');
      } else {
        city.classList.remove('success');
        city.classList.add('fail');
        errorCity.innerHTML = 'Выберите город';
      }
    }
  });
  function removeError() {
    for (i = 0; i < field.length; i++) {
      field[i].classList.remove('fail');
      errorText[i].innerHTML = '';
    }
  }
}
