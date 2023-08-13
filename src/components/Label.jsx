import React from 'react'

function Label ({ title }) {
  return (
    <div className='flex gap-3 items-center'>
      <img src='./images/icon-check.svg' alt='check icon' />
      <p className='text-xs text-grayishBlue'>{title}</p>
    </div>
  )
}

export default Label
