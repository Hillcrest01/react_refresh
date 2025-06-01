import React, { useState } from 'react'

const Movies = () => {

    const [movies, setMovies] = useState({
        name: 'Escape from Sobibor' , 
        ratings: 5
    })

    const handleClick =() => setMovies({...movies, ratings:9})
  return (
    <div>
        <h2>
            My best movie is: {movies.name}
        </h2>
        <p>
            And it's ratings is {movies.ratings}
        </p>
        <button onClick={handleClick}>Change Movie Ratings</button>
    </div>
  )
}

export default Movies