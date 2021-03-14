import React from 'react';

function User({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.access}</td>
      <td>{user.status}</td>
    </tr>
  );
}

export default User;
