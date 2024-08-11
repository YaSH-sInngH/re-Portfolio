import React from 'react'

function Footer() {
  return (
    <>
      <div className="my-5 md:m-8 m-3 font-mono md:text-sm text-xs flex md:flex-row flex-col">
        <p className='flex flex-row items-center justify-center'>
          Built with:
            <a href="https://react.dev/"
            className='md:ml-3 ml-0 md:mr-0 mr-4 md:p-0 p-2 hover:underline flex flex-row'>
              <img src="./react.svg" alt="" width='20' height='20'/>
              React
            </a>
            <a href="https://vitejs.dev/"
            className='md:ml-3 ml-0 md:mr-0 mr-4 md:p-0 p-2 hover:underline flex flex-row'>
              <img src="./vite.svg" alt="" width='20' height='20'/>
              Vite
            </a>
            <a href="https://tailwindcss.com/"
            className='md:ml-3 ml-0 md:mr-0 mr-4 md:p-0 p-2 hover:underline flex flex-row'>
              <img src="./tailwindcss.svg" alt="" width='20' height='20'/>
              Tailwind CSS
            </a>
            <a href="https://www.geeksforgeeks.org/javascript/"
            className='md:ml-3 ml-0 md:mr-0 mr-4 md:p-0 p-2 hover:underline flex flex-row'>
              <img src="./javascript.svg" alt="" width='20' height='20'/>
              Javascript
            </a>
        </p>
        <div className='md:ml-auto ml-0 text-center md:text-left md:my-0 my-5 bg-black p-4 font-thin text-xs'>
          Copyright © Yash Singh 2024 All rights Reserved
        </div>
      </div>
    </>
  )
}

export default Footer