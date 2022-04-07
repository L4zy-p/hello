import React from 'react'

import { AppWrap, MotionWrap } from '../wrapper'
import { images } from '../constants'
import { SocialMedia } from '../components'

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Contact</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:hemhongsa.p94@gmail.com' className='p-text'>hemhongsa.p94@gmail.com</a>
        </div>
        {/* <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href='tel: 0999999999' className='p-text'>0999999999</a>
        </div> */}
      </div>
      <SocialMedia isFooter />
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')