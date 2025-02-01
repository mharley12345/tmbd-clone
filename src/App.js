// src/App.js
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { fetchMovies } from './redux/actions/movieActions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const movieListRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleExploreClick = () => {
    if (movieListRef.current) {
      movieListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Hero onExplore={handleExploreClick} />
      <div className="content" ref={movieListRef}>
        <MovieList />
      </div>
    </div>
  );
};

export default App;
