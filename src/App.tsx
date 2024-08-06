import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
      <Button variant="outline" onClick={addCount}>Button</Button>
        <p>
          Count <code>{count}</code> clicks
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
