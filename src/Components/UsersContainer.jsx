import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>{userData.loading ? <h2>Loading..</h2> : <h2>{userData.error}</h2>}</div>

      <div>
        <h2>Users List</h2>
        {userData.users && userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
