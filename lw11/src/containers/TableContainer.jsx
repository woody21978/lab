import React from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table/Table';
// import User from '../components/User/User';

function TableContainer({ users }) {
  return <Table users={users} />;
}

const mapStateToProps = (state) => ({ users: state.users.users });

export default connect(mapStateToProps, null)(TableContainer);
