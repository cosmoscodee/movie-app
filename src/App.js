import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

const movieTitles = [
    "Matrix"
    , "Beast"
    , "Captain Marble"
    , "Sing Street"
];

const movieImages = [
    "This is Poster Image 1"
    , "This is Poster Image 2"
    , "This is Poster Image 3"
    , "This is Poster Image 4"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Movie title={movieTitles[0]} poster={movieImages[0]}/>
            <Movie title={movieTitles[1]} poster={movieImages[1]}/>
            <Movie title={movieTitles[2]} poster={movieImages[2]}/>
            <Movie title={movieTitles[3]} poster={movieImages[3]}/>
        </header>
      </div>
    );
  }
}

export default App;