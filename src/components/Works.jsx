
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { git, github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { a } from 'maath/dist/objectSpread2-284232a6.esm'


const ProjectCard=({gif,ndex,name,description,tags,image,source_code_link,source_code_link2})=>{
return(
  <motion.div
  
  /*variants={fadeIn('up','spring', index * 0.5, 0.75)}*/>
  <Tilt
 
  option={{
    max:45,
    scale:1,
    speed:450
  }}
  className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
 
  >
    <div className='relative w-full h-[230px]'  id='works'  >
      <img src={(
        (gif ? gif: image)
      )} 
      alt={name}
      className='w-full h-full object-cover rounded-2xl'
      onHo
      />

      <div className='absolute inset-0 flex justify-end mt-4  m-3 card-img_hover'>
      <div
      onClick={()=>window.open(source_code_link,'_blank')}
      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
       
        <img src={github}
         alt={github} 
         className='w-1/2 h-1/2 object-contain'
         />
        
      </div>
      </div>
    </div>

    <div className='mt-5'>
      <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      <p className='mt-2 text-secondary text-[14px]' >{description}</p>
      <a   className='cursos-pointer' target="_blank"  href={source_code_link2}>Ver Pagina <span className='font-bold text-red-600'>Clikeame!</span></a>
    </div>
    <div className='mt-4 flex-wrap gap-2'>
        {tags.map((tag)=>(
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            {tag.name}

          </p>
        ))}
    </div>
  </Tilt>

  </motion.div>
)
}


const Works = () => {
  return (
    <div id='works' className='pt-10'>
    <motion.div>
      <div className='pt-10' />
    <p className={styles.sectionSubText} >
      Mi trabajo
      </p>
      <h2 className={styles.sectionHeadText}>
        Proyectos
      </h2>

  </motion.div>

  <div className='w-full flex'>
    <motion.p
   /* variants={fadeIn('','',0.1,1)}*/
    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
       Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos de mi trabajo en el mundo real. Cada proyecto se describe brevemente con enlaces a repositorios de código y demostraciones en vivo. <p className='font-bold'>Podes ENTRAR a mi Github y hacer click en el ENLACE de las paginas para verlas en el SERVIDOR.</p> 
    </motion.p>
  </div>
  <div className='mt-20 flex flex-wrap gap-7 '>
    {projects.map((project,index)=>(

      <ProjectCard key={`project-${index}`}
      index={index}
      {...project}/>
      
    ))}
  </div>
  </div>
  )
}

export default SectionWrapper (Works,'') 