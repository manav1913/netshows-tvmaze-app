import React from 'react'
import MovieCard from '../Components/MovieCard'

const Favorites = ({ favorites, setFavorites }) => {
  return (
    <section className="home">
      <div className="home-header">
        <h2>My Favorites</h2>
        <p>Your saved shows will appear here.</p>
      </div>

      {favorites.length === 0 ? (
        <p className="empty-message">No favorites added yet.</p>
      ) : (
        <div className="shows-grid">
          {favorites.map((show) => (
            <MovieCard
              key={show.id}
              show={show}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Favorites