import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <div className=' h-screen justify-center flex items-center'>
            <div className='heading w-9/12 flex items-center '>
                <div>
                    <h2 className='new pb-4 text-3xl '>Hi, I am</h2>
                    <h1 className='pb-4 name text-8xl font-bold '>JOHN ROHIT</h1>
                    {/* <h2 className='pb-4 text-2xl '>DATA SCIENTIST</h2> */}
                    <div className="new-text text-3xl scroller">
                        <span>
                        DATA SCIENTIST<br/>
                        MACHINE LEARNING<br/>
                        DEEP LEARNIN

                        </span>
                    </div>
                    <p className='para tetx-2xl w-7/12 text-gray-500 '>My mission is to help you build your projects with my versatility and my ability to adapt to different situations. Together, let's turn your ideas into great projects!</p>
                    <div className='pt-12 flex flex-row gap-2     '>
                        <button className='cv-btn'>DOWNLOAD CV</button>
                        <button className='project-btn'>CHECKOUT MY PORJECTS</button>
                    </div>
                </div>
            </div>
        </div> 
        {/* <div className='h-screen justify-center flex items-center'>
                <div className=' w-screen  justify-center items-center flex flex-col'>
                    // <h2 className='pb-4 text-3xl '>Hi, I am</h2>
                    <h1 className='pb-4 text-9xl font-bold '>JOHN ROHIT</h1>
                    <h2 className='pb-4 text-lg '>DATA SCIENTIST, DATABASE AND MACHINE LEARNING </h2>  
                    <div className=' flex flex-row gap-2'>
                       <button className='cv-btn'>DOWNLOAD CV</button>
                        <button className='project-btn'>CHECKOUT MY PORJECTS</button>
                    </div>
                </div>
        </div> */}
    </>
  )
}

export default Header