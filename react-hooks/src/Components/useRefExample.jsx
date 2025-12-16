

const useRefExample=()=>{
      const[input,setInput]=useState('');
  // const[toggle,setToggle]=useState(true);
  const inputRef=useRef(null);


  useEffect(()=>{
    inputRef.current && inputRef.current.focus();
  },[])


  return (
   <>
   <div>
    <p>You Clicked 1 times!..</p>

    <input type="text" value={input} onChange={(event)=> setInput(event.target.value)} 
    
    ref={inputRef}/>

    <p> You Typed:<strong>{input}</strong> </p>

    </div>
    </>
  )
}

export default useRefExample;