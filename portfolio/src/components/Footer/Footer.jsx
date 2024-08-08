import React from 'react'

function Footer() {
  return (
    <>
      <div className="my-5 m-10 font-mono text-sm flex flex-row">
        <p className='flex flex-row'>
          Built with:
            <a href="https://react.dev/"
            className='ml-3 hover:underline flex flex-row'>
              <img src="./react.svg" alt="" width='20' height='20'/>
              React
            </a>
            <a href="https://vitejs.dev/"
            className='ml-3 hover:underline flex flex-row'>
              <img src="./vite.svg" alt="" width='20' height='20'/>
              Vite
            </a>
            <a href="https://tailwindcss.com/"
            className='ml-3 hover:underline flex flex-row'>
              <img src="./tailwindcss.svg" alt="" width='20' height='20'/>
              Tailwind CSS
            </a>
            <a href="https://www.geeksforgeeks.org/javascript/"
            className='ml-3 hover:underline flex flex-row'>
              <img src="./javascript.svg" alt="" width='20' height='20'/>
              Javascript
            </a>
        </p>
        <div className='ml-auto font-thin text-xs'>
          Copyright © Yash Singh 2024 All rights Reserved
        </div>
      </div>
    </>
  )
}

export default Footer