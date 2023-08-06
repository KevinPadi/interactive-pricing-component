import { useRef } from 'react'

function App () {
  const inputRef = useRef(null)

  const sliderColor = (e) => {
    // const value = (e.currentTarget - e.currentTarget.min) / (e.currentTarget.max - e.currentTarget.min) * 100
    // e.currentTarget.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
    // console.log(e.currentTarget.min)

    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }

  return (
    <>
      <div className='container mx-auto w-[450px] mt-20'>
        <div className='flex flex-col justify-center text-center bg-circlesPattern bg-no-repeat bg-center w-[100%] h-[150px]'>
          <h1 className='text-darkBlue text-3xl font-bold'>Simple, traffic-based pricing</h1>
          <h2 className='text-grayishBlue text-md'>Sign-up for our 30-day trial. No credit card required.</h2>
        </div>
        <section className='m-auto mt-11 h-[350px] w-[500px] rounded-lg bg-gray-300'>
          <div className='flex h-56 flex-col gap-5 rounded-lg  p-8'>
            <div className='flex justify-between'>
              <p>100K PAGEVIEWS</p>
              <p>$16.00 <span>/ month</span></p>
            </div>
            <div>
              <input
                type='range' defaultValue={2} min='0' max='4' step='1' onInput={sliderColor}
              />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
