import { useState,useEffect, useLayoutEffect } from "react";

function EffectComparison(){

    const[effectValue,setEffectValue]=useState('initial');
    const[layoutEffectValue,setLayoutEffectValue]=useState('initial');


    useEffect(()=>{
        console.log("useEffect")
        setEffectValue('updated by useEffect');
    },[]);//Runs after the first render

    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
        setLayoutEffectValue('updated by useLayoutEffect');
    },[])//Runs after the first render but before the painting the browser

    return(
        <div>
            <p>useEffect Value :{effectValue}</p>
            <p>useLayoutEffect Value :{layoutEffectValue}</p>
        </div>
    )
}

export default EffectComparison;