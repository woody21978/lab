import React from 'react';
import './Table.scss';
import User from '../User/User';

function Table({ users }) {
  if (!users.length) {
    return <h1 className="not-found">Пользователей пока нет</h1>;
  }
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th>Имя</th>
          <th>Email</th>
          <th>Права</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User user={user} key={user} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
