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

export const getUsers = () =>
  fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(data => data.data);

export const addUser = () => {
  const newUserData = {
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
  };
  return fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUserData)
  })
    .then(res => res.json())
    .then(newUser => newUser);
};

export const editUser = ({
  id,
  first_name,
  last_name,
  avatar
}) => {
  const updatedUserData = {
    id,
    avatar:
      'https://www.gravatar.com/avatar/6da5da4155cdc12ed4be471afc912d7c?s=328&d=identicon&r=PG',
    first_name: 'Ken',
    last_name: 'Wheeler'
  };
  return fetch(`https://reqres.in/api/users/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUserData)
  })
    .then(res => res.json())
    .then(data => data);
};

export const removeUser = id =>
  fetch(`https://reqres.in/api/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.status === 204);
