import React ,{useState,useEffect,useRef} from 'react';

const HooksObject=()=>{
    const[details,setDetails]=useState({counter:0,name:""});
    function increaseCounter(){
    setDetails((prev)=>({
        ...prev,
        counter:prev.counter+1
    }));
}
function decreaseCounter(){
    setDetails((prev)=>({
        ...prev,
        counter:prev.counter-1
    }));
}
return(
    <div>
        <h1>Counter :{details.counter}</h1>
        <h1>Clicked {details.counter} times</h1>
        <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
    </div>
)}
export default HooksObject;