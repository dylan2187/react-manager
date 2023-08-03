import { useRef, useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [val, setVal] = useState('')
  const nameRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    setVal(nameRef.current?.value || '')
  }
  return (
    <div className='App'>
      <input type='text' name='' id='' ref={nameRef} />
      <button onClick={handleClick}>button</button>
      <p>{val}</p>
    </div>
  )
}

export default App
