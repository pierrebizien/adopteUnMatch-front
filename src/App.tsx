import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Connection from './pages/Connection/index.tsx'
import MatchFinder from './pages/MatchFinder/index.tsx'
import TeamManager from './pages/TeamManager/index.tsx'
import WrongURL from './pages/404/index.tsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Connection />}></Route>
          <Route path="/MatchFinder" element={<MatchFinder />}></Route>
          <Route path="/TeamManager" element={<TeamManager />}></Route>
          <Route path="*" element={<WrongURL />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
