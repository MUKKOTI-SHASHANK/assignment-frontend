import axios from '../api';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    // const history = useHistory();
    const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.removeItem('token');
    // redirect to login page
  };

  return (
    <div>
      {localStorage.getItem('token') ? (
        <>
          <p>Welcome!</p>
          <button onClick={handleSignout}>Signout</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate('/api/login')}>Login</button>
          <button onClick={() => navigate('/api/signup')}>Signup</button>
        </>
      )}
    </div>
  );
};

export default Home;