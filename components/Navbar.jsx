import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='navbar  flex justify-center z-10 p-8 w-full'>
        <div className='flex  justify-between nav'>
        {/* <h1 className='font-bold text-black text-6xl  '>
              <Link href='/'>JR/..  .</Link>
            </h1> */}

            <div className='nav_list  '>
            <button className='main-button  '>HOME</button>
            <button className='main-button  '>ABOUT ME</button>
            <button className='main-button  '>WORK</button>
            <button className='main-button  '>EXPERIENCE</button>
            <button className='main-button  '>CONTACT ME</button>
            <form method="get" action="L:\Websites\my-app\public\John_Resume.pdf">
   <button type="submit">DOWNLOAD CV</button>
</form>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar