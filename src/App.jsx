import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import MovieDetails from './Pages/MovieDetails'


const App = () => {
    const [search, setSearch] = useState("")

  return (
    <div>
      <Navbar setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home search={search}/>}/>
        <Route path='/show/:id' element = {<MovieDetails/>}/>
      </Routes>
      
    </div>
  )
}

export default App
