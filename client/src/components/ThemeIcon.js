import React from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'

import useDarkMode from '../hook/useDarkMode'

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => {
    setDarkTheme(!darkTheme)
  }
  return (
    <span onClick={handleMode}>
    {
      darkTheme
      ? <FaMoon size={24} className='top-navigation-icon'/>
      : <FaSun size={24} className='top-navigation-icon'/>
    }
  </span>
  )
}

export default ThemeIcon