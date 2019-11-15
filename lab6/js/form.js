window.onload = () => {
  let checkValidation = document.querySelector('.btn'),
    errorText = document.querySelectorAll('.form-input span'),
    field = document.querySelectorAll('input'),
    fio = document.querySelectorAll('.form-input_item')[0],
    password = document.querySelectorAll('.form-input_item')[1],
    mail = document.querySelectorAll('.form-input_item')[2],
    city = document.querySelector('select');
  checkValidation.addEventListener('click', function(e) {
    e.preventDefault();
    // for (i = 0; i < field.length; i++) {
    //   field[i].classList.remove('fail');
    //   errorText[i].innerHTML = '';
    // }
    removeError();
    for (i = 0; i < field.length; i++) {
      if (!field[i].value) {
        fio.classList.remove('success');
        field[i].classList.add('fail');
        errorText[i].innerHTML = 'Заполните поле'; 
      } 
    }
    if (!(/([А-ЯЁ][а-яё]+[\-\s]?){3,}/).test(fio.value)) {
      fio.classList.remove('success');
      fio.classList.add('fail');
      errorText[0].innerHTML = 'Введите в формате: Фамилия Имя Отчество';
    } else {
      errorText[0].innerHTML = '';
      fio.classList.remove('fail');
      fio.classList.add('success');
    }
    if (!(/[0-9a-zA-Z!@#$%^&*]{6,}/).test(password.value)) {
        password.classList.remove('success');
        password.classList.add('fail');
        errorText[1].innerHTML = 'Не соблюдены правила. Проверьте раскладку клавиатуры';
        if (password.value.length < 6) {
          errorText[1].innerHTML = 'Парль должен содержать не менее 6 символов';
        }
      } else {
        errorText[1].innerHTML = '';
        password.classList.remove('fail');
        password.classList.add('success');
      }
    if(!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/).test(mail.value)) {
      mail.classList.remove('success');
      mail.classList.add('fail');
      errorText[2].innerHTML = 'Неправильно введено имя почты';
    } else {
      errorText[2].innerHTML = '';
      mail.classList.remove('fail');
      mail.classList.add('success');
    }
    if(city.value != 'none') {
      errorText[3].innerHTML = '';
      city.classList.remove('fail');
      city.classList.add('success');
    } else {
      city.classList.remove('success');
      city.classList.add('fail');
      errorText[3].innerHTML = 'Выберите город';
    }
  });
  function removeError() {
    for (i = 0; i < field.length; i++) {
      field[i].classList.remove('fail');
      errorText[i].innerHTML = '';
    }
  }
}
