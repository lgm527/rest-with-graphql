import React from 'react'
import { Mutation } from 'react-apollo'
import { EDIT_USER, GET_USERS } from '../utils'

const EditUser = ({ userId }) => {
  const updatedUser = {
    id: userId,
    avatar: 'https://www.gravatar.com/avatar/6da5da4155cdc12ed4be471afc912d7c?s=328&d=identicon&r=PG',
    first_name: 'Ken',
    last_name: 'Wheeler'
  }
  return (
    <Mutation
      mutation={EDIT_USER}
      update={(cache, { data: { editUser } }) => {
        const { users } = cache.readQuery({ query: GET_USERS })
        const copiedUsers = users.data.map((user, index) => {
          if (user.id === userId) {
            return editUser
          }
          return user
        })
        cache.writeQuery({
          query: GET_USERS,
          data: {
            users: {
              data: copiedUsers,
              __typename: 'Users'
            }
          }
        })
      }}
    >
      {(editUser, { data }) => (
        <span
          onClick={() => {
            editUser({
              variables: {
                updatedUser,
                userId: updatedUser.id
              }
            })
          }}
        >
          Edit
        </span>
      )}
    </Mutation>
  )
}

export default EditUser;
