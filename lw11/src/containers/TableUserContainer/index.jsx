import React from 'react';
import { useSelector } from 'react-redux';

import TableUser from '../../components/TableUser';
import { getUsers } from '../../redux/selectors/users';

const TableUserContainer = () => {
  const users = useSelector((state) => getUsers(state.users));

  return <TableUser users={users} />;
};

export default TableUserContainer;
