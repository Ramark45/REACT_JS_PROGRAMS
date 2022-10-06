import React,{createContext} from "react";
import MainComponent from "./MainComponent";
export const ChildContext=createContext();
const Context=()=>{
    return(
        <ChildContext.Provider value={"Ramar"}>

        <div>
            <MainComponent></MainComponent>
        </div>
        </ChildContext.Provider>
    )
}
export default Context;