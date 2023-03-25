import { useState } from 'react';
import axios from '../api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post('/api/signup', { username, email, password, confirmPassword });
      localStorage.setItem('token', res.data.token);
      // redirect to home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="User Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
      {/* <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" /> */}
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;