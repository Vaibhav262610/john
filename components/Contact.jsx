import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>  
         <div className='h-screen justify-center bg-black text-white flex items-center'>
            <div className=' w-screen justify-center flex-col flex items-center '>
                <div>
                    <h1 className='about-heading pb-64'>CONTACT</h1>
                </div>
                <div className='w-9/12'>
                    <h1 className='text-2xl'>Let's collaborate and start a conversation!</h1>
                    <h1 className='pt-12'>
                        <a href='#' className='gmail text-xl text-white underline '>johnrohit94@gmail.com
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact