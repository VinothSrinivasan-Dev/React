import { useState,useRef } from "react";

const UseRefVsUseState = () => {
    const[count,setCount]=useState(0);
    const countRef=useRef(0);

    const incrementState =() =>{
        setCount(count+1);
    };

    const incrementRef =()=>{
        countRef.current +=1;
        console.log("Ref Count : ",countRef.current);
    }

    return(
        <div>

            <h2>useRef vs useState </h2>

            <div>
                <h3>useState:</h3>
                <p>State Count: {count} </p>
                <button onClick={incrementState}>Increment State Count</button>
            </div>

            <div>
                <h3>useRef:</h3>
                <p>Ref Count(check console): {countRef.current} </p>
                <button onClick={incrementRef}>Increment Ref Count</button>
            </div>
        </div>
    )
}

export default UseRefVsUseState;

{
/*
UseState : Re renders the component when the state changes.

UseRef : Does not re render the component when the ref value changes. 

It is used to persist values across renders without causing re renders.
*/
}