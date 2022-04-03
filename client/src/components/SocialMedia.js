import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div className='group'>
        <BsTwitter/>
      </div>
      <div className='group'>
        <FaFacebookF/>
      </div>
      <div className='group'>
        <BsInstagram/>
      </div>
    </div>
  )
}

export default SocialMedia