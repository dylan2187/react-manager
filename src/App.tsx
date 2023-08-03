// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from 'react'
import { useWindowSize } from './hooks/useWindowSize'
import './App.css'

function App() {
  const [size] = useWindowSize()
  return (
    <div className='App'>
      <p>
        height: {size.height}, width: {size.width}
      </p>
    </div>
  )
}

export default App
