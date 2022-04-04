import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div className='group'>
        <BsTwitter className='group-hover:text-white'/>
      </div>
      <div className='group'>
        <FaFacebookF className='group-hover:text-white'/>
      </div>
      <div className='group'>
        <BsInstagram className='group-hover:text-white'/>
      </div>
    </div>
  )
}

export default SocialMedia