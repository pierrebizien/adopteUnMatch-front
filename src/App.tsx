import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Connection from './pages/Inscription/index.js'
import MatchFinder from './pages/MatchFinder/index.tsx'
import TeamManager from './pages/TeamManager/index.tsx'
import WrongURL from './pages/404/index.tsx'
import './App.css'
import Inscription from './pages/Inscription/index.js'
import Connexion from './pages/Connexion/index.js'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inscription />}></Route>
          <Route path="/Connexion" element={<Connexion />}></Route>
          <Route path="/MatchFinder" element={<MatchFinder />}></Route>
          <Route path="/TeamManager" element={<TeamManager />}></Route>
          <Route path="*" element={<WrongURL />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
