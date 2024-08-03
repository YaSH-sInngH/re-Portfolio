import React from 'react'
import About from '../About/About'

function Home() {
  return (
    <>
        <section>
            <p className='mx-3 mt-10 p-10 text-center text-5xl'>
                Hi I am Yash 👋
            </p>
            <p className='text-center text-2xl font-semibold'>
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
        </section>
    </>
  )
}

export default Home