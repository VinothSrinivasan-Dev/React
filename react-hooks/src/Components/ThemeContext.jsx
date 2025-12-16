
//Using UseContext Hook in React to share data between components without prop drilling.

import { createContext, useState } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }


    return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
    );
}

export default ThemeContext;