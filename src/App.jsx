import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import MovieDetails from './Pages/MovieDetails'
import Favorites from './Pages/Favorites'

const App = () => {
  const [search, setSearch] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  return (
    <div>
      <Navbar
        setSearch={setSearch}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <Routes>
        <Route
          path='/'
          element={
            <Home
              search={search}
              selectedGenre={selectedGenre}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route path='/show/:id' element={<MovieDetails />} />
        <Route
          path='/favorites'
          element={
            <Favorites
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App