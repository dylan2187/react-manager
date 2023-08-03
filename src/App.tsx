import { useRef, useState } from 'react'
import './App.css'

function App() {
  //受控组件
  const [query, setQuery] = useState('')
  const handleChange = (e: unknown) => {
    setQuery(e.target.value)
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={handleChange} />
    </div>
  )
}

export default App
