import './App.css';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import Notification from './Pages/Notification';
import OnlineStore from './Pages/OnlineStore';
import { Login } from './Pages/Login';
import Logout from './Pages/Logout';
import Help from './Pages/Help';
import fb_title from './Pages/fb_title.jpg'
import Protected from './Pages/Protected';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

    
function FbApp() {
    
  return(
    <Router>
      <nv>
      <img src={fb_title} className="fb_title"/>
        <ul className='list'>
        <li className="items"><Link className='link' to="/">HOME</Link></li>
        <li className="items"><Link className='link' to="/Videos">VIDEOS</Link></li>
        <li className="items"><Link className='link' to="/OnlineStore">SHOP ONLINE</Link></li>
        <li className="items"><Link className='link' to="/Notification">NOTIFICATIONS</Link></li>
        <li className="items"><Link className='link'to="/Help">HELP</Link></li>
        <li className='items'><Link className='link' to="/Logout">LOGOUT</Link></li>
        </ul>
      </nv>
      <Routes>
      <Route path="/" element={<Protected Pages={Home}/>}/>
        <Route path="/Videos" element={<Protected Pages={Videos}/>}/>
        <Route path="/OnlineStore" element={<Protected Pages={OnlineStore}/>}/>
        <Route path="/Notification" element={<Protected Pages={Notification}/>}/>
        <Route path="/Help" element={<Protected Pages={Help}/>}/>  
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default FbApp;