import React from 'react';
import UserContext from '../Context/UserContext';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { setUser } = React.useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div className="bg-gray-500 p-4">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />{' '}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
