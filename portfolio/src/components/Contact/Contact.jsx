import React from 'react'

function Contact() {
  return (
    <>
      <div className='m-10'>
        <h1 className='text-center text-white text-3xl m-5 p-2'>Get in Touch</h1>
        <p className='p-2 m-5 text-center font-semibold'>Hey, If you have any query, regarding anything please feel free to contact me.</p>
        <form action="https://formspree.io/f/mvgprkqo" method='POST' className='flex flex-col justify-center items-center'>
          <input 
            type="text" 
            name='name' 
            placeholder='Name'
            autoComplete='off'
            required  
            className='w-96 m-2 p-4 rounded-lg outline-none bg-black'
          />
          <input 
            type="email" 
            name='Email' 
            placeholder='E-mail'
            autoComplete='off'
            required  
            className='w-96 m-2 p-4 rounded-lg outline-none bg-black'
          />
          <textarea name="message" placeholder='Message' cols={30} rows={5} autoComplete='off' required className='w-96 m-3 p-4 rounded-lg outline-none bg-black'></textarea>
          <input type="submit" value='Send' className='w-36 rounded-xl bg-white text-black m-4 p-2 hover:bg-slate-300 cursor-pointer' />
        </form>
        <div className='w-full bg-neutral-900 grid grid-cols-2 my-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123809598!2d77.23701382068626!3d28.522102350413363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1723135193540!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-80 p-4'></iframe>
          <div className='flex flex-col justify-center items-center p-5'>
            <h1 className='m-5 underline text-white text-xl'>I'm Social too, You can Connect with me there!</h1>
            <div className='grid grid-cols-2 gap-4'>
              <a href="" className='flex items-center hover:underline'>
                <img src="./linkedin2.svg" alt="LinkedIn" className='w-10 h-10 invert' />
                <span className='ml-2'>LinkedIn</span>
              </a>
              <a href="" className='flex items-center hover:underline'>
                <img src="./icons8-twitter.svg" alt="twitter" className='w-10 h-10 invert' />
                <span className='ml-2'>Twitter</span>
              </a>
              <a href="" className='flex items-center hover:underline'>
                <img src="./icons8-instagram.svg" alt="Instagram" className='w-10 h-10 invert' />
                <span className='ml-2'>Instagram</span>
              </a>
              <a href="" className='flex items-center hover:underline'>
                <img src="./leetcode.svg" alt="Leetcode" className='w-10 h-10 invert' />
                <span className='ml-2'>LeetCode</span>
              </a>
              <a href="" className='flex items-center hover:underline'>
                <img src="./github.svg" alt="Github" className='w-8 h-8 invert' />
                <span className='ml-2'>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
