"use client";
import React, { useRef } from 'react'
import ProjectCard from './projectcard'
import { motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "Text translator",
        description: "A web app for translating text with the option for between different machine translation providers.",
        image: "/translator_example.png",
        gitUrl: "https://github.com/jere0015/Translate-Project",
        previewUrl: "/translator"
    },
    {
        id: 2,
        title: "Exercitium",
        description: "Exercitium is a Web App where you can track your workouts. After a workout, you log it on Exercitium, so you can look back at your previous workouts and see how much you have progressed.",
        image: "/ExercitiumLogo.png",
        gitUrl: "https://github.com/jere0015/Exercitium",
        previewUrl: "/exercitium"
    }
]

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

const cardVariants = {
  initial: { y: 50, opacity: 0},
  animate: { y: 0, opacity: 1}
}

  return (
    <section ref={ref}>
      <h2 id="projects" className='text-center text-4xl font-bold mt-4'>
        My Projects
      </h2>
      <br />
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial='initial' animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            /> 
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Projects