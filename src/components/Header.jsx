import React from 'react'

function Header () {
  return (
    <div className='flex flex-col justify-center items-center text-center bg-circlesPattern bg-no-repeat bg-center w-[100%] h-[200px] md:h-[150px]'>
      <h1 className='text-darkBlue text-lg md:text-3xl font-bold'>Simple, traffic-based pricing</h1>
      <p className='text-grayishBlue text-sm md:text-md w-[200px] md:w-full'>Sign-up for our 30-day trial. No credit card required.</p>
    </div>
  )
}

export default Header
