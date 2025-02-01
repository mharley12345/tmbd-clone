// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = ({ onExplore }) => {
  return (
    <div className="hero">
      <h1>Welcome to TMDB Clone</h1>
      <p>Discover the world of movies and TV shows. Get the latest information, ratings, and reviews for your favorite titles!</p>
      <button className="hero-button" onClick={onExplore}>Explore Now</button>
    </div>
  );
};

export default Hero;
