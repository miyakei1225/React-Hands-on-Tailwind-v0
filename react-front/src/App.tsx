import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { List } from './pages/list'
import { Detail } from './pages/detail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list' element={<List />} />
      <Route path='/detail' element={<Detail />} />
    </Routes>
  )
}

export default App
