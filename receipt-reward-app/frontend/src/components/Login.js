```javascript
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithRedirect({
      redirect_uri: window.location.origin,
      email: email,
      password: password,
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Login" />
      </form>
      <button onClick={() => loginWithRedirect()}>Login with Social Media</button>
    </div>
  );
};

export default Login;
```