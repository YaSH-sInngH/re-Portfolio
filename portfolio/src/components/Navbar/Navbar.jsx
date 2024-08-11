import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setisMenuOpen(false);
    }
  };

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside)
    }
  },[]);

  const handleNavLinkClick = () => {
    setisMenuOpen(false);
  };

  return (
    <>
      <div className="mt-8 mx-2">
        <nav className="flex flex-row justify-between items-center">

          {/* button for hamburger-menu */}
          <button
            onClick={() => setisMenuOpen(!isMenuOpen)}
            className='block md:hidden text-2xl'
          >
            &#9776;
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex md:flex-row md:space-x-4">
            <li className="transition-all hover:text-neutral-300 align-middle relative py-2 px-4">
              <NavLink to='/' onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="transition-all hover:text-neutral-300 align-middle relative py-2 px-4">
              <NavLink to='/about'>
                About
              </NavLink>
            </li>
            <li className="transition-all hover:text-neutral-300 align-middle relative py-2 px-4">
              <NavLink to='/projects'>
                Projects
              </NavLink>
            </li>
            <li className="transition-all hover:text-neutral-300 align-middle relative py-2 px-4">
              <NavLink to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex flex-row ml-auto space-x-4">
            <a
              className="transition-all hover:invert flex align-middle relative py-2 px-4 items-center rounded border border-neutral-200 bg-slate-100 p-1 text-base leading-4 text-neutral-950 no-underline m-1"
              href="https://github.com/YaSH-sInngH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github.svg"
                alt="GitHub logo"
                width="20"
                height="20"
                className="mr-1"
              />
              Github
            </a>
            <a
              className="transition-all hover:invert flex align-middle relative py-2 px-4 items-center rounded border border-neutral-200 bg-slate-100 p-1 text-base leading-4 text-neutral-950 no-underline m-1"
              href="https://www.linkedin.com/in/yash-sinngh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin2.svg"
                alt="LinkedIn logo"
                width="20"
                height="20"
                className="mr-1"
              />
              Linkedin
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } w-2/5 flex-col bg-white text-black shadow-md p-4 absolute md:hidden`}
        >
          <ul>
            <li className="transition-all hover:text-neutral-300 py-2 px-4">
              <NavLink to='/' onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="transition-all hover:text-neutral-300 py-2 px-4">
              <NavLink to='/about'>
                About
              </NavLink>
            </li>
            <li className="transition-all hover:text-neutral-300 py-2 px-4">
              <NavLink to='/projects'>
                Projects
              </NavLink>
            </li>
            <li className="transition-all hover:text-neutral-300 py-2 px-4">
              <NavLink to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
