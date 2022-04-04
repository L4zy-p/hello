import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'skills', 'work', 'contact'].map((item, index) => (
        <a key={item + index}
          href={`#${item}`}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#4c5aff' } : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots