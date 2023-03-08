import React from 'react'
import Next from './Components/Next'
import Home from './Components/Home'
import{
  BrowserRouter,Route,Routes
} from "react-router-dom"
import './App.css'
import Map from './Components/Map'


export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/f' element={<Map></Map>}></Route>
      <Route path='/infro' element={<Next></Next>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
