import React from 'react';
import { Mutation } from 'react-apollo';
import { REMOVE_USER, GET_USERS } from '../utils';

const RemoveUser = ({ userId }) => (
  <Mutation
    mutation={REMOVE_USER}
    update={(cache, { data: { removeUser } }) => {
      const { users } = cache.readQuery({ query: GET_USERS })
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: {
            data: users.data.filter(user => user.id !== userId),
            __typename: 'Users'
          }
        }
      })
    }}
  >
    {(removeUser, { data }) => (
      <span
        onClick={() => {
          removeUser({
            variables: { userId }
          })
        }}
      >
        Remove
      </span>
    )}
  </Mutation>
)

export default RemoveUser;
