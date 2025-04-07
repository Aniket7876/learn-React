import React from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
  const { user } = React.useContext(UserContext);
  if (!user) {
    return <div>Please Login</div>;
  }
  return (
    <>
      <div>
        <h2>Profile</h2>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    </>
  );
}

export default Profile;
