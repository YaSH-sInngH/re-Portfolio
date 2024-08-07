import React from 'react'

function Card({img, projectName, projectLink, codeLink}) {
  return (
    <>
      <div className='w-72 h-72 flex flex-col items-center bg-white  m-1 gradient-border'>
        <div className='w-full h-3/4'>
          <img src={img} alt={projectName} className='object-cover w-full h-full'/>
        </div>
        <div className='w-full text-black text-center'>
          {projectName}
        </div>
        <div className='flex w-full justify-center'>
          <div className='w-full bg-neutral-800 hover:bg-neutral-700 transition-all duration-500 cursor-pointer m-1 rounded-lg text-center text-white'>
            <a href={projectLink} className='block p-1.5' target='_blank' rel='noopener noreferrer'>
              Live URL
            </a>
          </div>
          <div className='w-full bg-neutral-800 hover:bg-neutral-700 transition-all duration-500 cursor-pointer m-1 rounded-lg text-center text-white'>
            <a href={codeLink} className='block p-1' target='_blank' rel='noopener noreferrer'>
              Code
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card