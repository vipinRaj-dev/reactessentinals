import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const ContexApi = (props) => {
    //step 5 : destrcturing the values passed by the step:4
   const {theme , toggleTheme } = useContext(ThemeContext)  
//    console.log(ThemeContext);
//    console.log(ThemeProvider);

  return (
    <div>
      <header style={{ background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>
      <h1>{props.name}</h1>
      {/* step 6 : using the value here , context api completed */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
    </div>
  )
}

export default ContexApi
