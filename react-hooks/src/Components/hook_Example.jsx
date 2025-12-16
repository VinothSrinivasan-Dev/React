import { useState,useEffect } from "react";


function DataFetching(){
    const[data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((json)=> setData(json))
        .catch((error)=> console.log(error));
    },[]);

    return(
        <div>
            <h2>Fetched Data:</h2>
            <ul>
                {data.map((item)=>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );  
}

export {DataFetching};
export default DataFetching;