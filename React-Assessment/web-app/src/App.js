import './App.css';
import './App.css';
import {Login} from './Components/Login';
import Dashboard from './Components/Dashboard';
import Protected from './Components/Protected';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
function App() {
  return(
    <Router>
      <nav className='nav'>
        <ul>
        <li><Link to="/">Dashboard</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Protected Component={Dashboard}/>}/>     
      </Routes>
    </Router>
  );
}

export default App;
