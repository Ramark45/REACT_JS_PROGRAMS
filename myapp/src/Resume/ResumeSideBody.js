import './ResumeStyle.css';
import avatar from './avatar.jpg';
import './ResumeBody';
import ResumeCenter from './ResumeBody'; 
function MyResume() {
  return (
    
    <>
    <div>
    <div class="center" ><ResumeCenter/></div>
    
      <div class="left">
        <div>
          <img src={avatar}></img>
        </div>
        
        <br></br>
        <div>
            <h1>CONTACT</h1>
            <hr></hr>
            <h3>Phone</h3>
            <p>1234567890</p>

            <h3>Email</h3>
            <p>abc@gmail.com</p>

            <h3>Address</h3>
            <p>Chennai, Tamilnadu</p>
            
        </div>

        <div>
            <h1>EDUCATION</h1>
            <hr></hr>
            <h3>B.Tech.,IT</h3>
            <p>VIT University,Vellore</p>
            

            <h3>12th</h3>
            <p>GHSS</p>
            
        </div>
        
        <div>
            <h1>SKILLS</h1>
            <hr></hr>
            
            <ul>
                <li>UI/UX</li>
                <li>Visual Design</li>
                <li>Wireframes</li>
                <li>Story boards</li>
                <li>User Flows</li>
            </ul>
            
        </div>
        <div>
            <h1>LANGUAGE</h1>
            <hr></hr>
            
            <ul>
                <li>English</li>
                <li>Tamil</li>
                
            </ul>   
        </div>
      </div>
      </div>
      </>
      
    
  );
}

export default MyResume;
