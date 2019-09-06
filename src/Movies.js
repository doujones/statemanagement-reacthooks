import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

const Movies = () => {
  const [movies] = useContext(MovieContext);
    return(
      <div>
      {movies.map(movie =>(
        <Movies name={movie.name} price={movie.price} key={movie.id}/>
      ))}
      </div>
  )
}


export default Movies