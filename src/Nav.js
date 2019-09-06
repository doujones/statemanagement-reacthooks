import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies] = useContext(MovieContext)
    return(
      <nav>
      <h3>Boswell</h3>
      <p>List of Movies: {movies.length}</p>
      </nav>
  )
}

export default Nav