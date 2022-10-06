import React,{useContext} from "react";
import {ChildContext} from './Context';
const ChildComponent=()=>{
    const hello=useContext(ChildContext)
    console.log(hello)
    return(
        <h1>Hello from Child component.
            </h1>

    )
}
export default ChildComponent; 