import './App.css'

function App () {
  return (
    <>
      <div className='container mx-auto w-[450px] mt-20'>
        <div className='flex flex-col justify-center text-center bg-circlesPattern bg-no-repeat bg-center w-[100%] h-[150px]'>
          <h1 className='text-darkBlue text-3xl font-bold'>Simple, traffic-based pricing</h1>
          <h2 className='text-grayishBlue text-md'>Sign-up for our 30-day trial. No credit card required.</h2>
        </div>
        <section class='m-auto mt-11 h-[350px] w-[500px] rounded-lg bg-gray-300'>
          <div class='flex h-56 flex-col gap-5 rounded-lg bg-slate-400 p-8'>
            <div class='flex justify-between'>
              <p>100K PAGEVIEWS</p>
              <p>$16.00 <span>/ month</span></p>
            </div>
            <div>
              <input class='bg-sky-200 w-full h-2 appearance-none' type='range' min='0' max='4' step='1' name='price' id='price' />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
