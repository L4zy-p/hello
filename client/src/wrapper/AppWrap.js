import React from 'react'
import { SocialMedia, NavigationDots } from '../components'

const AppWrap = (Component, idName, className) => function HOC() {
  return (
    <div id={idName} className={`app__container ${className}`}>
      {
        idName !== 'home' && <SocialMedia />
      }
      <div className='app__wrapper app__flex'>
        <Component />
        {/* <div className='copyright'>
          <p className='copyright-text p-text'>@2022</p>
          <p className='copyright-text p-text'>All rights reserved</p>
        </div> */}
      </div>
      <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap