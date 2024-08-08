
import React, {Component} from 'react'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <>
        <div className="bg-b2 min-h-screen w-3/4 max-w-screen-lg mx-auto p-6 font-DM text-white font-bold">
        <div className="container mx-auto my-2 mt-4 rounded-xl">
          <Navbar />
          <hr className="mt-2 border-t-2 border-neutral-300" />
          <Outlet />
          <hr className="mt-2 border-t-1 border-neutral-300" />
          <Footer/>
        </div>
      </div>
      </>
    )
  }
}

export default App