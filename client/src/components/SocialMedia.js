import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = ({ isFooter }) => {
  const linkTo = (url) => {
    window.open(url, '_blank')
  }
  return (
    <div className={`app__social ${isFooter ? 'app__footer-social' : ''}`}>
      <div className='group' onClick={() => linkTo('https://github.com/L4zy-p')}>
        <BsGithub className='group-hover:text-white' />
      </div>
      <div className='group' onClick={() => linkTo('https://www.linkedin.com/in/pacharamai-h')}>
        <BsLinkedin className='group-hover:text-white' />
      </div>
      <div className='group' onClick={() => linkTo('https://medium.com/@L4zy-p')}>
        <BsMedium className='group-hover:text-white' />
      </div>
    </div>
  )
}

export default SocialMedia