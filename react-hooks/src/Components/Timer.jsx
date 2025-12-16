import { useState,useEffect } from "react";


function Timer(){
    const[timer,setTimer]=useState(0);

    useEffect(()=>{
     const interval=setInterval(()=>{
        setTimer((prevTimer)=> prevTimer +1);
     },1000);

     return()=>{
        clearInterval(interval);
        console.log("Timer is Cleared!..")
    };
    },[]);

    return(
        <div>
            <h2>Timer: {timer} seconds</h2>
        </div>
    );
}
export default Timer
   


