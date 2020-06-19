import React from 'react';
import { Mutation } from 'react-apollo';
import { ADD_USER, GET_USERS } from '../utils';

const CreateUser = ({ onClick }) => {
  const newUser = {
    first_name: 'Laurell',
    last_name: 'Mc',
    avatar: 'https://bulma.io/images/placeholders/128x128.png'
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
