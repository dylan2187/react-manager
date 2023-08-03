import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState('dylan')
  const isAdmin = true
  const [list, setList] = useState(['1', '2', '3', '4'])
  const [count, setCount] = useState(1)
  const h1 = <h1>title</h1>

  const handleClick = () => {
    setName('wangkai')
    // setList([...list, 2])
  }
  const handleList = () => {
    setList([...list, 'tom'])
  }
  const handleCount = () => {
    setInterval(() => {
      console.log('11')
      setCount(count + 1)
    }, 1000)
  }
  return (
    <div className='App'>
      <div>
        {/* <input type='text' value={name} onChange={setName('wangkai')} /> */}
        <button onClick={handleClick}>按钮</button>
        <button onClick={handleList}>更新列表</button>
        <button onClick={handleCount}>异步修改count</button>
      </div>
      <span>{name}</span>
      {h1}
      {isAdmin ? '管理员' : '游客'}
      {list.map(item => {
        return <h2 key={item}>{item}</h2>
      })}
      <h2>count: {count}</h2>
    </div>
  )
}

export default App
