import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { images } from '../constants'
import { AppWrap, MotionWrap } from '../wrapper'

const About = () => {
  const [abouts, setAbouts] = useState([{ images: images.about01, title: 'test', description: 'test descp' }])
  return (
    <>
      <h2 className='head-text'>
        I Know That <span>Good Design</span>
        <br />
        mean <span>Good Bussiness</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opcity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img className='app__profile-item-img' src={images.about01} alt='' />
            <h2 className='bold-text' style={{ marginTop: '20px' }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: '10px' }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')