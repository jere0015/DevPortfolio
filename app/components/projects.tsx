"use client";
import React, { useRef, useState, useEffect } from 'react'
import ProjectCard from './projectcard'
import { motion, useInView } from 'framer-motion'
import { client } from '@/sanity/lib/client';

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  slug:string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

const cardVariants = {
  initial: { y: 50, opacity: 0},
  animate: { y: 0, opacity: 1}
}

useEffect(() => {
  const fetchProjects = async () => {
    const query = `*[_type == "post"]{
      _id,
      title,
      "description": shortText[0].children[0].text,
      "image": mainImage.asset->url,
      gitUrl,
      "slug": slug.current
    }`;
    const data = await client.fetch(query);
    setProjects(data);
  };
  fetchProjects();
}, []);

  return (
    <section ref={ref} className='text-black'>
      <h2 id="projects" className='text-center text-4xl font-bold mt-4'>
        My Projects
      </h2>
      <br />
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projects.length === 0 ? (
          <p className='text-3xl'>NO PROJECTS FOUND</p>
        ) : (
          projects.map((project, index) => (
            <motion.li key={index} variants={cardVariants} initial='initial' animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard 
            key={project._id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={`/${project.slug}`}
            /> 
            </motion.li>
          ))
        )}
      </ul>
    </section>
  )
}

export default Projects