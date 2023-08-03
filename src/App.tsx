import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const total1 = () => {
    console.log('total1...')
    const list = [1, 2, 3, 4]
    return list.reduce((prev, curr) => {
      return prev + curr
    }, 0)
  }
  const total2 = useMemo(() => {
    console.log('total2...')
    const list = [1, 2, 3, 4]
    return list.reduce((prev, curr) => {
      return prev + curr
    }, 0)
  }, [])
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={handleClick}>按钮</button>
      <p>total1: {total1()}</p>
      <p>total2: {total2}</p>
    </div>
  )
}

export default App
