import React, { createContext } from 'react'
import useDarkMode from '../hook/useDarkMode'

export const DarkThemeContext = createContext()

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useDarkMode()

  return <DarkThemeContext.Provider
    value={{ darkTheme, setDarkTheme }}
  >
    {children}
  </DarkThemeContext.Provider>
}