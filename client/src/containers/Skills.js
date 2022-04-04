import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../wrapper'
import { images } from '../constants'

const Skills = () => {
  const [experiences, setExperiences] = useState([{
    year: '2019',
    works:[
      {
        _key: "721658793f6a",
        _type: "workExperience",
        company: "Other",
        desc: "I worked as backend devloper at Other",
        name: "Backend developer"
      }
    ]
  }])
  const [skills, setSkills] = useState([{ name: 'react', icon: images.react, bgColor: 'blue' }])

  return (
    <>
      <h2 className='head-text'><span>Skills</span> & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiences?.map((exp) => (
            <motion.div
              className='app__skills-exp-item'
              key={exp.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{exp.year}</p>
              </div>
              <motion.div
                className='app__skills-exp-works'>
                {exp?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')