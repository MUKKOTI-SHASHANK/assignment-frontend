import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

// import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;