import React from 'react'
import Card from '../Card/Card'
import projects from '../Card/project-info'

function Projects() {
  return (
    <>
      <div className='m-5'>
        <p className='text-3xl'>Projects</p>
        <p className='text-lg font-thin my-5 p-2'>I've worked on many projects throughout my college life, and below are few which showcases my ability to work with different technologies, and putting those technologies together to make fully functional websites. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.</p>
        <div className='m-10 flex justify-center items-center'>
        <div className='grid grid-cols-2 gap-20 justify-center items-center'>
          {projects.map((project, index)=>{
            return (
              <Card
                key={index}
                img={project.img}
                projectName={project.projectName}
                projectLink={project.projectLink}
                codeLink={project.codeLink}
              />
            );
          })}
        </div>
        </div>
      </div>
    </>
  )
}

export default Projects