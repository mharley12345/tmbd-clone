// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';
import './MovieList.css';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  const [expandedMovies, setExpandedMovies] = useState({});

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const toggleExpand = (movieId) => {
    setExpandedMovies((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="movie-list">
      {movies.sort((a, b) => b.vote_average - a.vote_average).map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <div className="movie-content">
            <div className="movie-title">
              {movie.title}
              <span className="movie-rating">⭐ {movie.vote_average}</span>
            </div>
            <div className={`movie-overview ${expandedMovies[movie.id] ? 'expanded' : ''}`}>
              {movie.overview}
            </div>
            <button onClick={() => toggleExpand(movie.id)}>
              {expandedMovies[movie.id] ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
