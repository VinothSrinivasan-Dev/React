import { useId } from "react";

const Checkbox=()=>{

    const userId= useId();

    return(
        <div>
            <input type="checkbox" id={userId} />
            <label htmlFor={userId}>Accept Terms</label>
        </div>
    )
}
//here Instead of writing id for input  , react provide the random id using useId hook.
//Important Point : Do not call useId to generate keys in a list.Keys should be generated from your data 
export default Checkbox;