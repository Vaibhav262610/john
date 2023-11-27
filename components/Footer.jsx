import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>  
         <div className='h-screen justify-center bg-black text-white flex items-center'>
            <div className=' w-screen justify-center flex-col flex items-center '>  
               <div className='flex  b1 items-center w-screen p-12 justify-between'>
                <h1 className='text-5xl pt-2 pb-4'>MY ARTICLES</h1>
                <svg className='a1' width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
               </div>
               <div className='flex  b1 items-center w-screen p-12 justify-between'>
                <h1 className='text-5xl pt-2 pb-4'>READ CV</h1>
                <svg className='a1' width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
               </div>
               <div className='flex  b1 items-center w-screen p-12 justify-between'>
                <h1 className='text-5xl pt-2 pb-4'>CALL ME</h1>
                <svg className='a1' width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
               </div>
               <div className='flex  b1 items-center w-screen p-12 justify-between'>
                <h1 className='text-5xl pt-2 pb-4'>MALT</h1>
                <svg className='a1' width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
               </div>
               <div className='flex  b1 items-center w-screen p-12 justify-between'>
                <h1 className='text-5xl pt-2 pb-2'>LINKEDIN</h1>
                <svg className='a1' width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
               </div>
               <div className='flex  b1 items-center w-screen p-12 justify-between'>
                <h1 className='text-5xl pt-2 pb-4'>X(TWITTER)</h1>
                <svg className='a1' width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
               </div>   
            </div>
        </div>
    </>
  )
}

export default Footer