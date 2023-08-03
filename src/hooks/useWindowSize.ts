import { useEffect, useState } from 'react'

export function useWindowSize() {
  const [size, setSize] = useState({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth
  })
  const handleWindowSize = () => {
    setSize({
      height: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize)
    return () => {
      window.removeEventListener('resize', handleWindowSize)
    }
  }, [])
  return [size]
}
