import React from 'react'

function Navbar() {
  return (
    <>
      <div className="mt-8 mx-2">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            <a className="transition-all hover:text-neutral-300 flex align-middle relative py-2 px-4" href="/">Home</a>
            {/* <a className="transition-all hover:text-neutral-300 flex align-middle relative py-2 px-4" href="/about">About</a> */}
            <a className="transition-all hover:text-neutral-300 flex align-middle relative py-2 px-4" href="/projects">Projects</a>
            <a className="transition-all hover:text-neutral-300 flex align-middle relative py-2 px-4" href="/contact">Contact</a>
          </div>
          <div className="flex flex-row ml-auto space-x-4">
            <a 
            className="transition-all hover:invert flex align-middle relative py-2 px-4 items-center rounded border border-neutral-200 bg-slate-100 p-1 text-base leading-4 text-neutral-950 no-underline m-1" 
            href="https://github.com/YaSH-sInngH"
            target = "_blank"
            >
              <img 
              src="/github.svg" 
              alt="React logo" 
              width="20" 
              height="20" 
              className="mr-1"
              />
                Github
            </a>
            <a 
            className="transition-all hover:invert flex align-middle relative py-2 px-4 items-center rounded border border-neutral-200 bg-slate-100 p-1 text-base leading-4 text-neutral-950 no-underline m-1" 
            href="https://www.linkedin.com/in/yash-sinngh/"
            target = "_blank"
            >
              <img 
              src="/linkedin2.svg" 
              alt="React logo" 
              width="20" 
              height="20" 
              className="mr-1"
              />
                Linkedin
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar