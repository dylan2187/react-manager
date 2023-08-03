import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // 单纯函数
  const total1 = () => {
    console.log('total1...')
    const list = [1, 2, 3, 4]
    return list.reduce((prev, curr) => {
      return prev + curr
    }, 0)
  }
  // 使用useMemo缓存值
  const total2 = useMemo(() => {
    // useMemo缓存了一个值，不会重复更新
    console.log('total2...')
    const list = [1, 2, 3, 4]
    return list.reduce((prev, curr) => {
      return prev + curr
    }, 0)
  }, [count])

  // 使用useCallback缓存函数
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={handleClick}>按钮</button>
      <p>total1: {total1()}</p>
      <p>total2: {total2}</p>
      <Child />
    </div>
  )
}
const Child = () => {
  return <div>我是子节点</div>
}

export default App
