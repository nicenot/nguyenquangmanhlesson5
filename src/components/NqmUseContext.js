import React, { createContext, useContext, useState } from 'react'
import NqmUseContext1 from './NqmUseContext1';
export const ThemeContext = createContext();

export default function NqmUseContext() {
    const[theme,setTheme] = useState('red');

    const nqmHandleChange = ()=>{
        setTheme(theme ==='red'?'blue':'red')
    }
  return (
    <ThemeContext.Provider value ={theme}>
    <div className='alert'>
        <h2>demo NqmUseContext</h2>
        <NqmUseContext1 />
        <button onClick={nqmHandleChange}>change bgcolor</button>
    </div>
    </ThemeContext.Provider>
  )
}
