import { useContext } from "react";
import ThemeContext from "./ThemeContext";


const ThemeSwitcher = () => {
    const{isDarkMode,toggleTheme} = useContext(ThemeContext);
    
  return (


    
  <button onClick={toggleTheme}> 

  Switch To {isDarkMode ?"Light":"Dark"} Mode
  
  </button>


  )
};

export default ThemeSwitcher;