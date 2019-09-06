import React, {useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: 'Michael Jordan Bio',
      price: '$75',
      id: 23124
    },
    {
      name: 'Allen Iverson Bio',
      price: '$175',
      id: 23125
    },
    {
      name: 'Bo Jackson Bio',
      price: '$75',
      id: 23126
    }
  ]);
  
  // Render all of children components that wrapped
  return(
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}

// Provider job is to allow rendering of whatever is inside as children