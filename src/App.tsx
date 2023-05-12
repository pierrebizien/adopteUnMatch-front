import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MatchFinder from './pages/MatchFinder/index.tsx'
import TeamManager from './pages/TeamManager/index.tsx'
import WrongURL from './pages/404/index.tsx'
import './App.css'
import Inscription from './pages/Inscription/index.js'
import Connexion from './pages/Connexion/index.js'
import ProtectedAccess from './pages/ProtectionPages/ProtectedAccess.tsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Inscription />}></Route>
          <Route path="/Connexion" element={<Connexion />}></Route>
          <Route path="/MatchFinder" element={
          <ProtectedAccess>
            <MatchFinder />
          </ProtectedAccess>
          }>
          </Route>
          <Route path="/TeamManager" element={<TeamManager />}></Route>
          <Route path="*" element={<WrongURL />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
