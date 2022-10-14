import React,{useEffect}from 'react';
import {useNavigate} from 'react-router-dom';
const Protected=(props)=>{
    const{Pages}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(!login){
            navigate("/Login")
        }
    });
    return(
        <div>
            <Pages/>
        </div>
    );
}
export default Protected;