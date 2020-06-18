import React from 'react';
import styled from 'styled-components';
import { getUsers, addUser, editUser, removeUser } from './utils';
import UsersList from './components/UsersList.jsx';
import CreateUser from './components/CreateUser.jsx';
import './styles.css';

const StyledEmoji = styled.span`
  filter: hue-rotate(90deg);
`
export default class App extends React.Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const users = await getUsers()
    this.setState({ users })
  }

  addUser = async () => {
    const newUser = await addUser()
    let newUserList = [...this.state.users]
    newUserList.push(newUser)
    this.setState({
      users: newUserList
    })
  }

  editUser = async user => {
    const editedUser = await editUser(user)
    let updatedUserList = this.state.users.map(user =>
      user.id === editedUser.id ? editedUser : user
    )
    this.setState({
      users: updatedUserList
    })
  }

  removeUser = async id => {
    const userIsRemoved = await removeUser(id)
    if (userIsRemoved) {
      const updatedUserList = this.state.users.filter(
        user => user.id !== id
      )
      this.setState({
        users: updatedUserList
      })
    }
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
          >
            🌕
          </StyledEmoji>
        </p>
        <UsersList
          users={this.state.users}
          editUser={this.editUser}
          removeUser={this.removeUser}
        />
        <CreateUser onClick={() => this.addUser()} />
      </div>
    )
  }
}
