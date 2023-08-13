import React from 'react'

function Label ({ title }) {
  return (
    <div className='flex gap-3 items-center'>
      <svg xmlns='http://www.w3.org/2000/svg' width='9' height='8'><path fill='none' stroke='#10D8C4' stroke-width='2' d='M1 4.134l1.907 1.908L7.949 1' /></svg>
      <p className='text-xs text-grayishBlue'>{title}</p>
    </div>
  )
}

export default Label
