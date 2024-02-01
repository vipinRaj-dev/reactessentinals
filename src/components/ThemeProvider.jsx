// ThemeContext.js
import React, { createContext, useState } from "react";

const ThemeContext = createContext();
// console.log();
 

//step 1 : creating a component 
const ThemeProvider = ({ children }) => {
    //step 3 : assessing the contexapi from the children
    console.log(children);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };

  return (
    // step 4 : providing the value in the themecontext the children is the contexapi component
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
