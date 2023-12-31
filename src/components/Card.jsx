import { useState } from 'react'
import Label from './Label'
import SwitchButton from './SwitchButton'
import Button from './Button'

function Card ({ prices }) {
  const [pageValue, setPageValue] = useState(prices[2][0])
  const [priceValue, setPriceValue] = useState(prices[2][1])
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const sliderColor = (e) => {
    let target = e.target
    const value = target.value
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'

    setPageValue(prices[value][0])
    setPriceValue(prices[value][1])
  }
  return (
    <section className='mx-auto mt-11 md:h-[400px] h-full md:w-full rounded-lg bg-veryPaleBlue divide-y divide-lightGrayishBlueBar shadow-lg'>
      <div className='flex items-center h-60 flex-col md:gap-12 gap-7 rounded-t-lg p-5 md:p-10 md:grid md:grid-cols-2 md:grid-rows-3 mb-4'>
        <p className='text-grayishBlue text-sm font-bold  tracking-widest order-1'>{pageValue} PAGEVIEWS</p>
        <p className='flex items-center text-4xl font-bold text-darkBlue order-3'>{isChecked ? priceValue - priceValue * 0.25 : priceValue}.00<span className='text-sm font-normal text-grayishBlue ml-1'>/ {isChecked ? 'year' : 'month'}</span></p>
        <div className='order-2 w-full md:col-span-2 row-start-2'>
          <input
            type='range' defaultValue={2} min='0' max='4' step='1' onInput={sliderColor}
          />
        </div>
        <div className='flex justify-center items-center gap-4 order-4 md:col-span-2 row-start-3'>
          <p className='text-[10px] md:text-sm text-grayishBlue'>Monthly billing</p>
          <SwitchButton handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} />
          <p className='text-[11px] md:text-sm text-grayishBlue'>Year billing</p>
          <p className='text-[10px] md:text-[12px] bg-lightGrayishRed text-lightRed rounded-full  font-semibold py-[2px] px-[5px]'>-25% <span className='md:before:content-["discount"]' /></p>
        </div>
      </div>
      <div className='flex flex-col gap-8 items-center md:flex md:flex-row md:justify-between p-5 md:p-10'>
        <div className='flex flex-col text-center gap-3'>
          <Label title='Unlimited websites' />
          <Label title='100% data ownership' />
          <Label title='Email reports' />
        </div>
        <Button />
        <div />
      </div>
    </section>
  )
}

export default Card
