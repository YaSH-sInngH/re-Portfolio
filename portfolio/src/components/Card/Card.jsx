import React from 'react'

function Card({img, projectName, projectAbout}) {
  return (
    <>
      <div className='w-80 h-60 border flex flex-col items-center bg-neutral-900'>
        <div className='w-full h-3/4'>
          <img src="/.png" alt="img" />
        </div>
        <div className='w-full bg-white text-black text-center'>
          projectName
        </div>
        <div className='w-2/4 bg-yellow-600 cursor-pointer m-1 rounded-lg text-center'>
          <a href="https://www.google.com" className='' target='blank'>
          projectLinks
          </a>
        </div>
        <div className='w-2/4 bg-yellow-600 cursor-pointer m-1 rounded-lg text-center'>
          <a href="https://www.google.com" className='' target='blank'>
            codeLinks
          </a>
        </div>
      </div>
    </>
  )
}

export default Card