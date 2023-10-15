```javascript
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../utils/auth';

const Register = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registered = await registerUser(user);
    if (registered) {
      history.push('/dashboard');
    } else {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
```