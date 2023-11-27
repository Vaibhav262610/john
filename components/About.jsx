import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
        <div className='h-screen justify-center flex items-center'>
            <div className=' w-screen justify-center flex-col flex items-center '>
                <div>
                    <h1 className='about-heading'>ABOUT ME</h1>
                </div>
                <div className='w-9/12'>
                    <h1 className='text-2xl pb-4 text-gray-500'>
                    Welcome to my portfolio!
In Short: I'm a passionate and experienced developer with a deep love for all tech things.  
                    </h1>
                    <p className='text-5xl'>
                    Self-taught since my youngest age, I love learning new things to improve my skills. Very curious by nature, I love the world of the web and new technologies, what I like most is the art and the precision behind each design. With all my skills and knowledge, I will have the pleasure to devote myself fully to the development of your ideas in order to make them great projects.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About