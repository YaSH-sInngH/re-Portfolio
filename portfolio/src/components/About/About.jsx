import React from 'react'

function About() {
  return (
    <>
        <div className='m-10'>
            <p className='my-10 p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatum sunt, accusantium officiis repellat quae odit accusamus ullam aspernatur laborum vitae, sapiente quia pariatur error aliquam tempora placeat. Cum aspernatur, ab ipsum obcaecati modi pariatur excepturi recusandae perferendis enim illo?</p>
            <p className='my-10 p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatum sunt, accusantium officiis repellat quae odit accusamus ullam aspernatur laborum vitae, sapiente quia pariatur error aliquam tempora placeat. Cum aspernatur, ab ipsum obcaecati modi pariatur excepturi recusandae perferendis enim illo?</p>
            <h1>Skillset</h1>
            <table className='w-full border-white border text-center'>
                <tr className='bg-slate-950'>
                    <td className='border-white border'>What I know!</td>
                    <td className='border-white border'>What I do?</td>
                    <td className='border-white border'>What I understand?</td>
                </tr>
                <tr className='bg-slate-950'>
                    <td className='border-white border'>A</td>
                    <td className='border-white border'>B</td>
                    <td className='border-white border'>C</td>
                </tr>
                <tr className='bg-slate-950'>
                    <td className='border-white border'>D</td>
                    <td className='border-white border'>E</td>
                    <td className='border-white border'>F</td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default About