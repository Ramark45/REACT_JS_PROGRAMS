import './App.css';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import Protected from './Components/Protected';
import Profile from './Components/Profile';
import { Login } from './Components/Login';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
function App() {
  return(
    <Router>
      <nv>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About us</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        </ul>
      </nv>
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>}/>
        <Route path="/AboutUs" element={<Protected Component={AboutUs}/>}/>
        <Route path="/Profile" element={<Protected Component={Profile}/>}/>
        <Route path="/Login" element={<Login/>}/>      
      </Routes>
    </Router>
  );
}

export default App;
