import React from 'react'

function Navbar() {
  return (
    <>
      <div className="mt-8 mx-2">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-2 px-4" href="/">Home</a>
            <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-2 px-4" href="/work">About</a>
            <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-2 px-4" href="/blog">Projects</a>
            <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-2 px-4" href="/blog">Contact</a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar