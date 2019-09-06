import React from 'react';
import './App.css';
import Movies from './Movies'
import Nav from './Nav'
import {MovieProvider} from './MovieContext'
import AddMovie from './AddMovies'


function App() {
  return (
    <MovieProvider>
    <div className="App">
     <Nav/>
     <AddMovie/>
     <Movies/>
    </div>
    </MovieProvider>
  );
}

export default App;
