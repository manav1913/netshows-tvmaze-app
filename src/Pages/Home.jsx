import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard'

const Home = ({ search }) => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    const fetchShows = async () => {
      let url = "https://api.tvmaze.com/shows"

      if (search) {
        url = `https://api.tvmaze.com/search/shows?q=${search}`
      }

      const res = await fetch(url)
      const data = await res.json()

      if (search) {
        setShows(data.map((item) => item.show))
      } else {
        setShows(data)
      }
    }

    fetchShows()
  }, [search])

  return (
    <section className="home">
      <div className="home-header">
        <h2>Featured Shows</h2>
        <p>Browse some popular series and discover what to watch next.</p>
      </div>

      <div className="shows-grid">
        {shows.slice(0, 20).map((show) => (
          <MovieCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  )
}

export default Home