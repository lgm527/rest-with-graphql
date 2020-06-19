import React from 'react';
import { Mutation } from 'react-apollo';
import { ADD_USER, GET_USERS } from '../utils';

const CreateUser = ({ onClick }) => {
  const newUser = {
    first_name: 'Ken',
    last_name: 'Wheeler',
    avatar:
      'https://i1.sndcdn.com/avatars-000068789647-lzbpw2-t200x200.jpg'
  }
  return (
    <Mutation
      mutation={ADD_USER}
      update={(cache, { data: { addUser } }) => {
        const { users } = cache.readQuery({ query: GET_USERS })
        cache.writeQuery({
          query: GET_USERS,
          data: {
            users: {
              data: users.data.concat([addUser]),
              __typename: 'Users'
            }
          }
        })
      }}
    >
      {(addUser, { data }) => (
        <div>
          <button
            onClick={() => {
              addUser({
                variables: { newUser }
              })
            }}
          >
            Add New User
          </button>
        </div>
      )}
    </Mutation>
  )
}

export default CreateUser;
