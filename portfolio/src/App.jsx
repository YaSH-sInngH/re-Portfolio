import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
function App() {

  return (
    <>
      <div className="bg-b2 min-h-screen w-3/4 max-w-screen-lg mx-auto my-4 rounded-3xl p-6 font-DM text-white font-bold">
        <div className="container mx-auto my-2 mt-4 rounded-xl">
          <Navbar />
          <hr className="mt-2 border-t-2 border-neutral-300" />
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
