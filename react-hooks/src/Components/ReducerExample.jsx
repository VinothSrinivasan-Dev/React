import { useReducer, useState} from "react";

const initialState=0;

function CounterReducer(state,action){

    switch(action.type){
        case 'INCREMENT':
            return state + action.value;
        case 'DECREMENT':
            return state -1;
        case 'RESET':
            return 0;

        default:
           return state;
    }



}
const Counter =() =>{

    const[reducerCount,dispatch]=useReducer(CounterReducer,initialState);
    
    // const[count,setCount]=useState(0);


    return(
        <div>
            <h2>Count :  {reducerCount} </h2>
            <button onClick={() => dispatch({type:"INCREMENT",value:5})}>Increment By 5</button>
        </div>
    )
}

export default Counter;

{
    /*
    Reducer Example Component   
    Used  to handle complex State Logic in React Applications
    It provides a predictable way to manage state transitions based on actions dispatched to the reducer function.  

    */
}