// import { useState } from "react"
import React ,{useState,useEffect,useRef} from 'react';


const Hooks=()=>
{
    const[counter,setCounter]=useState(0);
    const[name,setName]=useState("");
    useEffect(()=>{
        document.title=counter+" times clicked!"
    })
    function increaseCounter(){
        setCounter(counter+1);
    }
    function decreaseCounter(){
        setCounter(counter-1);
    }
    return(
        <div>
            <input type="text" onChange={e=>{setName(e.target.value)}}/>
            <h1>{name} has clicked {counter} times!</h1>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
    );
}
export default Hooks;