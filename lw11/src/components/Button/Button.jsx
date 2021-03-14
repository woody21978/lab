import React from 'react';
import './Button.scss';

function Button({ type, text, changeModalActive, status }) {
  return (
    <button
      type="submit"
      className={`btn btn-${type}`}
      onClick={() => changeModalActive(status)}
    >
      {text}
    </button>
  );
}

export default Button;
