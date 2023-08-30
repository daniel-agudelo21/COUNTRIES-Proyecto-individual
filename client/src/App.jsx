import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Create from './views/Create/Create'
import ActivityDetail from './views/ActivityDetail/ActivityDetail'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<Detail />} />
        <Route path='/activities/:id' element={<ActivityDetail />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </>
  )
}

export default App
