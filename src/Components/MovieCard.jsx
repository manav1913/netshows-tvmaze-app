import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ show, favorites, setFavorites }) => {
  const isFavorite = favorites.some((item) => item.id === show.id)

  const toggleFavorite = (e) => {
    e.preventDefault()

    if (isFavorite) {
      const updatedFavorites = favorites.filter((item) => item.id !== show.id)
      setFavorites(updatedFavorites)
    } else {
      setFavorites([...favorites, show])
    }
  }

  return (
    <Link to={`/show/${show.id}`} className="movie-link">
      <div className="movie-card">
        <button className="fav-btn" onClick={toggleFavorite}>
          {isFavorite ? "❤️" : "🤍"}
        </button>

        <div className="movie-image">
          <img
            src={show.image?.medium || "https://via.placeholder.com/210x295"}
            alt={show.name}
          />
        </div>

        <div className="movie-content">
          <h3>{show.name}</h3>
          <p className="movie-year">
            {show.premiered?.split("-")[0] || "N/A"}
          </p>

          <p className="movie-genres">
            {show.genres.length > 0 ? show.genres.join(" • ") : "No Genre"}
          </p>

          <p className="movie-rating">
            ⭐ {show.rating?.average || "No Rating"}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard