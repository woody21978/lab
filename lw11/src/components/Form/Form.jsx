import React from 'react';
import './Form.scss';
import Button from '../Button/Button';

function Form() {
  return (
    <form className="form">
      <div className="form-block">
        <input type="text" className="form__input" placeholder="Имя" />
      </div>
      <div className="form-block">
        <input type="text" className="form__input" placeholder="Email" />
      </div>
      <div className="form-block">
        <select className="form__select" id="access">
          <option value="0" disabled="true" selected="selected">
            Выберите права
          </option>
          <option value="1">Пользователь</option>
          <option value="2">Администратор</option>
        </select>
      </div>
      <div className="form-block">
        <select className="form__select" id="status">
          <option value="0" disabled="true" selected="selected">
            Выберите статус
          </option>
          <option value="1">Активен</option>
          <option value="2">Неактивен</option>
        </select>
      </div>
      <div className="form-block">
        <Button type="success" text="Добавить" />
      </div>
    </form>
  );
}

export default Form;
