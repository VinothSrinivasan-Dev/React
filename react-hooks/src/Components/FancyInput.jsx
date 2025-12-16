
import { useState, useRef, useImperativeHandle } from "react";

const FancyInput=({ref})=>{
    const[input,setInput]=useState('');
    const inputRef= useRef(null);

    useImperativeHandle(ref,()=>({
        focus:()=>{
            inputRef.current.focus();
        },
        clear:()=>{
            inputRef.current.value ="";
        }

    })
    
    )
    //useImperative which is used to pass the child ref into parent component

    // useEffect(()=>{
    //     inputRef.current && inputRef.current.focus();
    // },[])

    return(
        <div>
            <input type="text" value={input}
            onChange={(event)=> setInput(event.target.value)}
            ref={inputRef}
            />
            <p>You Typed: <strong>{input}</strong></p>
        </div>
    )
}

export default FancyInput;