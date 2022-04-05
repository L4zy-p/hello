import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import useDarkMode from '../hook/useDarkMode'
import { DarkThemeContext } from '../context/DarkThemeContext'

const ThemeIcon = () => {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext)
  const handleMode = () => {
    setDarkTheme(!darkTheme)
  }
  return (
    <span onClick={handleMode}>
      {
        darkTheme
          ? <FaMoon size={24} className='top-navigation-icon' />
          : <FaSun size={24} className='top-navigation-icon' />
      }
    </span>
  )
}

export default ThemeIcon