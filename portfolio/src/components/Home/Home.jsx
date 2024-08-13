import React from 'react'
import { Link } from 'react-router-dom';
function Home() {

    const handleDownload = ()=>{
        const link = document.createElement('a')
        link.href = '/Yash-Singh-resume.pdf'
        link.download = 'Yash-Singh-resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

  return (
    <>
        <section className='m-1 md:m-10'>
            <p className='mx-3 mt-10 p-10 text-center md:text-5xl text-3xl'>
                Hi I am Yash 👋
            </p>
            <p className='text-center md:text-2xl text-sm font-semibold'>
                I am a Developer, skilled in 
                <a 
                href="https://react.dev" 
                target="_blank" 
                className="inline-flex items-center rounded border border-neutral-200 bg-neutral-900 p-1 text-base leading-4 text-neutral-50 no-underline m-1"
                >
                    <img 
                    src="/react.svg" 
                    alt="React logo" 
                    width="14" 
                    height="14" 
                    className="mr-1"
                    />
                        React
                </a>
                ,
                <a 
                href="https://nodejs.org/en" 
                target="_blank" 
                className="inline-flex items-center rounded border border-neutral-200 bg-neutral-900 p-1 text-base leading-4 text-neutral-50 no-underline m-1"
                >
                    <img 
                    src="/nodejs-icon.svg" 
                    alt="React logo" 
                    width="14" 
                    height="14" 
                    className="mr-1"
                    />
                        Node
                </a>
                ,
                <a 
                href="https://expressjs.com/" 
                target="_blank" 
                className="inline-flex items-center rounded border border-neutral-200 bg-neutral-900 p-1 text-base leading-4 text-neutral-50 no-underline m-1"
                >
                    <img 
                    src="/expressjs.svg" 
                    alt="React logo" 
                    width="14" 
                    height="14" 
                    className="mr-1 filter invert"
                    />
                        Express
                </a>
                and
                <a 
                href="https://www.mongodb.com/resources/products/fundamentals/basics" 
                target="_blank" 
                className="inline-flex items-center rounded border border-neutral-100 bg-neutral-900 p-1 text-base leading-4 text-neutral-50 no-underline m-1"
                >
                    <img 
                    src="/mongodb-icon.svg" 
                    alt="React logo" 
                    width="14" 
                    height="14" 
                    className="mr-1"
                    />
                        Mongo
                </a>
                .
                <br/>
                I am also proficient in data structures and algorithms through 
                <a 
                href="https://www.geeksforgeeks.org/c-plus-plus/" 
                target="_blank" 
                className="inline-flex items-center rounded border border-neutral-100 bg-neutral-900 p-1 text-base leading-4 text-neutral-50 no-underline m-1"
                >
                    <img 
                    src="/c++.svg" 
                    alt="React logo" 
                    width="14" 
                    height="14" 
                    className="mr-1"
                    />
                        C++
                </a>
                .
            </p>
            <div className='my-14 flex md:flex-row flex-col'>
                <img src="y-pic1.png" alt="myImage" className='md:w-3/6 w-full rounded-tr-full rounded-b-full border-8 border-white'/>
                <div className='flex flex-col'>
                    <p className='p-5 md:text-xl text-base font-thin'>Pursuing B.tech Degree in Computer Science| Delving into different technologies| React.js Node.js Express.js Mongo| Languages like C, C++, and Java| Open-Source Contributor| Full-Stack Developer</p>
                    <button 
                        onClick={handleDownload}
                        className='w-60 md:ml-5 md:m-0 m-auto flex items-center justify-center bg-white hover:bg-gray-300 rounded-xl transition-all duration-300 text-black p-1'>
                        <img src="docs.svg" alt="docsLogo" width={40} height={40} />
                        Download Resume
                    </button>
                    <p className='p-5 md:text-base text-sm'>Want to know more? Dive on to <Link to="/about" className='underline'><i>about&#8599;</i></Link> page.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 my-14 gap-5'>
                <div className='w-full h-full flex flex-col items-center rounded-2xl bg-slate-50 text-black hover:bg-slate-800 hover:text-white transition-all duration-500'>
                    <p className='text-xl p-3'>UI/UX</p>
                    <p className='text-sm p-4 text-center'>I have a good experience with UI/UX and figma tool.</p>
                </div>
                <div className='w-full h-full flex flex-col items-center rounded-2xl bg-slate-50 text-black hover:bg-slate-800 hover:text-white transition-all duration-500'>
                    <p className='text-xl p-3'>DSA</p>
                    <p className='text-sm p-4 text-center'>I have a good knowledge in Data structures and algorithms.</p>
                </div>
                <div className='w-full h-full flex flex-col items-center rounded-2xl bg-slate-50 text-black hover:bg-slate-800 hover:text-white transition-all duration-500'>
                    <p className='text-xl p-3'>Backend</p>
                    <p className='text-sm p-4 text-center'>I excel in Node.js, Express.js for backend development.</p>
                </div>
                <div className='w-full h-full flex flex-col items-center rounded-2xl bg-slate-50 text-black hover:bg-slate-800 hover:text-white transition-all duration-500'>
                    <p className='text-xl p-3'>Frontend</p> 
                    <p className='text-sm p-4 text-center'>I possess proficiency in frontend frameworks such as React.js, and Bootstrap.</p>
                </div>
                <div className='w-full h-full flex flex-col items-center rounded-2xl bg-slate-50 text-black hover:bg-slate-800 hover:text-white transition-all duration-500'>
                    <p className='text-xl p-3'>C++/Java</p>
                    <p className='text-sm p-4 text-center'>I am skilled in programming languages like C, C++, and Java. </p>
                </div>
                <div className='w-full h-full flex flex-col items-center rounded-2xl bg-slate-50 text-black hover:bg-slate-800 hover:text-white transition-all duration-500'>
                    <p className='text-xl p-3'>Databases</p>
                    <p className='text-sm p-4 text-center'>I have a great understanding with databases like MongoDB and MySQL.</p>
                </div>
            </div>  
        </section>
    </>
  )
}

export default Home