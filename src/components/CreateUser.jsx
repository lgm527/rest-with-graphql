import React from 'react';

const CreateUser = ({ onClick }) => (
  <div>
    <button onClick={() => onClick()}>Add New User</button>
  </div>
);

export default CreateUser;
