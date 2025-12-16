import './App.css'
import { useRef } from 'react';
import FancyInput from './Components/FancyInput';
import DataFetching  from './Components/hook_Example';
import Counter from './Components/ReducerExample';
import ShoppingCart from './Components/shopping-cart';
import ThemeSwitcher from './Components/ThemeSwitcher';
import Checkbox from './Components/useIdHookExample';


function App() {

  const fancyInputRef=useRef();

  return(
    <div>
        <h1>React Hooks Examples</h1>
      {/* <FancyInput  ref={fancyInputRef}/>
      <button onClick={()=>fancyInputRef.current.focus()}>Focus</button>
      <button onClick={()=> fancyInputRef.current.clear()}>Clear</button> */}
      <Checkbox />
     
    </div>
  )
  
}

export default App
