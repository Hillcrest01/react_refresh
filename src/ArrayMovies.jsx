import React, { useState } from 'react'

const ArrayMovies = () => {

    const [movie, setMovie] = useState([
        {id: 1, title: 'Wolf Street' , year: 2025},
        {id: 2, title: 'Spiderman' , year: 2011}
    ])

    const changeMovieName =() =>{
        setMovie(movie.map(
            m => (
                m.id === 1 ? {...movie , title: 'John Wick 4'} : m
            )
        ))
    }
  return (
    <div>The best movies are:

        {movie.map(m=>(
            <li key={Math.random()}>
                {m.title}
            </li>
        ))}

        <button onClick={changeMovieName}>Change Name</button>
    </div>
  )
}

export default ArrayMovies