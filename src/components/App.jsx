import React from 'react';
import styled from 'styled-components';
import { ADD_USER, EDIT_USER, REMOVE_USER } from '../utils';
import UsersList from './UsersList.jsx';
import CreateUser from './CreateUser.jsx';
import '../styles.css';

const StyledEmoji = styled.span`
  filter: hue-rotate(90deg);
`
export default class App extends React.Component {
  addUser = async () => {
    ADD_USER()
  }

  editUser = async user => {
    EDIT_USER(user)
  }

  removeUser = async id => {
    REMOVE_USER(id)
  }

  render() {
    return (
      <div className="App">
        <h1>
          Spaceheroes{' '}
          <span role="img" aria-label="rocket emoji.">
            🚀
          </span>
        </h1>
        <p>
          Volunteers heading to Mars.{' '}
          <StyledEmoji
            role="img"
            aria-label="moon emoji for Spacehereos."
          > <span role="img" aria-label="moon emoji.">
            🌕
            </span>
          </StyledEmoji>
        </p>
        <UsersList />
        <CreateUser onClick={() => this.addUser()} />
      </div>
    )
  }
}
