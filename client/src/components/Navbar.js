import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import ThemeIcon from './ThemeIcon'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <p className='text-2xl'>Hello</p>
      </div>
      <ul className='app__navbar-links'>
        {
          ['home', 'skills', 'work', 'contact'].map((item) =>
            <li className='app__flex p-text group' key={`link-${item}`}>
              <div className='group-hover:bg-secondary'/>
              <a className='group-hover:text-secondary' href={`#${item}`}>{item}</a>
            </li>
          )
        }
      </ul>
      <ThemeIcon/>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'skills', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar