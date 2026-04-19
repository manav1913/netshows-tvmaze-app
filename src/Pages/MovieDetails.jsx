import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    const fetchShow = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
      const data = await res.json()
      setShow(data)
    }

    fetchShow()
  }, [id])

  if (!show) return <h2>Loading...</h2>

  return (
    <div style={{ padding: "30px" }}>
      <img src={show.image?.medium} alt={show.name} />

      <h1>{show.name}</h1>

      <p>{show.genres.join(", ")}</p>
      <div
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
    </div>
  )
}

export default MovieDetails