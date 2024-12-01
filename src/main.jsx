import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.sass'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/game/:name' element={<GamePage></GamePage>}></Route>
      <Route path='/game' element={<GamePage></GamePage>}></Route>
    </Routes>
  </BrowserRouter>
)
