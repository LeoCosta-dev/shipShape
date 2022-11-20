import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/HomePage'
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
