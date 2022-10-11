import './App.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Notification from './Pages/Notification';
import OnlineStore from './Pages/OnlineStore';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import Help from './Pages/Help';
import fb_title from "./Pages/fb_title.jpg"
function App(){
  return(
    <>
    {/* <div><br/>
      <center><img src={fb_title} className="fb_titile"/></center>
      </div> */}
    <Router>
      <nav >
      <img src={fb_title} className="fb_title"/>
        <ul className='list'>
        <li className="items"><Link className='link' to="/">HOME</Link></li>
        <li className="items"><Link className='link' to="/Videos">VIDEOS</Link></li>
        <li className="items"><Link className='link' to="/OnlineStore">SHOP ONLINE</Link></li>
        <li className="items"><Link className='link' to="/Notification">NOTIFICATIONS</Link></li>
        <li className="items"><Link className='link'to="/Help">HELP</Link></li>
        </ul>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Videos" element={<Videos/>}/>
        <Route path="/OnlineStore" element={<OnlineStore/>}/>
        <Route path="/Notification" element={<Notification/>}/>
        <Route path="/Help" element={<Help/>}/>
        {/* <Route path="/Profile" element={<Profile/>}/> */}
      </Routes>
      <div className='footer'><center>Copyrights Reserved @2022</center></div>
    </Router>
    </>
  );
}
export default App;


