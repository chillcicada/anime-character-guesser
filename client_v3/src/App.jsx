import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Multiplayer from './pages/Multiplayer'
import SinglePlayer from './pages/SinglePlayer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleplayer" element={<SinglePlayer />} />
        <Route path="/multiplayer" element={<Multiplayer />} />
        <Route path="/multiplayer/:roomId" element={<Multiplayer />} />
      </Routes>
    </Router>
  )
}

export default App
