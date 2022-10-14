import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login=()=>{
    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login){
            navigate("/")
        }
    });
    return(
        <div className="login">
            <h1>CEO LOGIN</h1>
            <label>
                Username
                <br/>
                <input type="text"/>
            </label><br/>
            <label>
                Password
                <br/>
                <input type="password"/>
            </label><br/><br/>
            <button onClick={login}>Login</button>
        </div>
    );
}