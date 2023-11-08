import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';
import { FaceControls } from '@react-three/drei';
import { SectionWrapper } from '../hoc';

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt 
    className='x:w-[250px] w-full'>
      <motion.div
      variants={fadeIn('right','spring', 0.5 * index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Descripcion</h2>
    </motion.div>

    <motion.p
    variants={fadeIn('','',0.1, 1)}
    className='mt-4 text-secondary  text-[13px]
    max-w-3xl leading-[30px]'
    >
        Soy un desarrollador de software capacitado con experiencia en Python y
        JavaScript y experiencia en marcos como React.js y Django. 
        Aprendo rápido y estoy en busca de mi primer trabajo como desarrollador
        para poder expandir mis conocimientos.
         ¡Trabajemos juntos para hacer realidad tus ideas!
    </motion.p>

    <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        
      </div>
    </>
  )
}

export default SectionWrapper (About,'about')