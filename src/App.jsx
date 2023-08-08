import Button from './components/Button'
import Label from './components/Label'
import SwitchButton from './components/SwitchButton'

function App () {
  const sliderColor = (e) => {
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
    <div className='container mx-auto w-[450px] mt-20'>
      <div className='flex flex-col justify-center text-center bg-circlesPattern bg-no-repeat bg-center w-[100%] h-[150px]'>
        <h1 className='text-darkBlue text-3xl font-bold'>Simple, traffic-based pricing</h1>
        <h2 className='text-grayishBlue text-md'>Sign-up for our 30-day trial. No credit card required.</h2>
      </div>
      <section className='mx-auto mt-11 h-[350px] w-[500px] rounded-lg bg-veryPaleBlue divide-y divide-lightGrayishBlueBar'>
        <div className='flex h-56 flex-col gap-9 rounded-t-lg p-10'>
          <div className='flex justify-between items-center'>
            <p className='text-grayishBlue text-sm font-bold tracking-widest'>100K PAGEVIEWS</p>
            <p className='flex items-center text-4xl font-bold text-darkBlue'>$16.00<span className='text-sm font-normal text-grayishBlue ml-1'>/ month</span></p>
          </div>
          <div className=''>
            <input
              type='range' defaultValue={2} min='0' max='4' step='1' onInput={sliderColor}
            />
          </div>
          <div className='flex justify-center items-center gap-4'>
            <p className='text-sm text-grayishBlue'>Monthly billing</p>
            <SwitchButton />
            <p className='text-sm text-grayishBlue'>Year billing</p>
            <p className='bg-lightGrayishRed text-lightRed rounded-full text-[10px] font-bold px-1'>25% discount</p>
          </div>
        </div>
        <div className='flex justify-between items-center p-10'>
          <div className='flex flex-col gap-3'>
            <Label title='Unlimited websites' />
            <Label title='100% data ownership' />
            <Label title='Email reports' />
          </div>
          <Button />
          <div />
        </div>
      </section>
    </div>
  )
}

export default App
