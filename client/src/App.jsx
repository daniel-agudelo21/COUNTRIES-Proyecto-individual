import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/create' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
