import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import ElectronicPage from './Pages/ElectronicPage';
import BakeryPage from './Pages/BakeryPage';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Profile from './Pages/Profile'

function App(){
  return(
    <Router>
      <nav >
        <ul className='list'>
        <li className="items"><Link to="/">HOME</Link></li>
        <li className="items"><Link to="/ElectronicPage">Electronic Page</Link></li>
        <li className="items"><Link to="/BakeryPage">BakeryPage</Link></li>
        <li className="items"><Link to="/Profile">Profile</Link></li>
        </ul>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ElectronicPage" element={<ElectronicPage/>}/>
        <Route path="/BakeryPage" element={<BakeryPage/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Profile/:username/:age" element={<Profile/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <div>Footer</div>
    </Router>
  );
}
export default App;
