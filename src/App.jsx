import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/HomePage'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
