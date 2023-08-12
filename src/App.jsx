import Header from './components/Header'
import Card from './components/Card'

function App () {
  const prices = [
    ['10K', 8],
    ['50K', 12],
    ['100K', 16],
    ['500K', 24],
    ['1M', 36]
  ]
  return (
    <div className='container mx-auto md:w-[500px] md:mt-20 w-[85%] h-[450px]'>
      <Header />
      <Card prices={prices} />
    </div>
  )
}

export default App
