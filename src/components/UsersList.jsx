import React from 'react';
import styled from 'styled-components';
import User from './User.jsx';
import { Query } from 'react-apollo';
import { GET_USERS } from '../utils';

const Container = styled.div`
  width: 220px;
  margin: 0 auto;
`;

const List = ({ users, editUser, removeUser }) => (
  <Container>
    {users.map(user => (
      <User
        key={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
        avatar={user.avatar}
        id={user.id}
        edit={() => editUser(user)}
        remove={() => removeUser(user.id)}
      />
    ))}
  </Container>
);

const UsersList = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      if (data) {
        return <List users={data.users.data} />;
      }
    }}
  </Query>
);

export default UsersList;
