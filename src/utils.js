import gql from 'graphql-tag';

export const GET_USERS = gql`
  query getUsers {
    users @rest(type: "Users", path: "users?page=2") {
      data
    }
}
`

export const ADD_USER = gql`
  mutation addUser($input: newUser!) {
    addUser(input: $newUser)
      @rest(type: "User", path: "users", method: "POST") {
      first_name
      last_name
      avatar
      id
    }
  }
`

export const REMOVE_USER = gql`
  mutation removeUser($input: userId!) {
    removeUser(input: $userId)
      @rest(
        type: "User"
        path: "users/{args.userId}"
        method: "DELETE"
      ) {
      userId
    }
  }
`

export const EDIT_USER = gql`
  mutation editUser($input: updatedUser!) {
    editUser(input: $updatedUser)
      @rest(
        type: "User"
        path: "users/{args.userId}"
        method: "PUT"
      ) {
      first_name
      last_name
      avatar
      id
    }
 }
`
