import React from 'react';
import styled from 'styled-components';
import RemoveUser from './RemoveUser.jsx';
//import EditUser from './EditUser.jsx';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  h4 {
    margin-bottom: 0;
  }
  span {
    color: gray;
    font-size: 0.6rem;
    margin-right: 5px;

    &:hover {
      color: black;
      cursor: pointer;
    }
  }
`;

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  box-shadow: 0px 0px 0px 3px rgba(65, 208, 201, 0.75);
  margin-right: 0.75rem;
`;
const User = ({ firstName, lastName, avatar, id, remove, edit }) => (
  <Container>
    <Avatar
      src={avatar}
      alt={`avatar of ${firstName} ${lastName}.`}
    />
    <div style={{ textAlign: 'left' }}>
      <h4>
        {firstName} {lastName}
      </h4>
      <span onClick={edit}>Edit</span>
      <RemoveUser userId={id} />
    </div>
  </Container>
);

export default User;
