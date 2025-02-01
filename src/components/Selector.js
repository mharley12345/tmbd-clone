// src/components/Selector.js
import React from 'react';
import './Selector.css';

const Selector = ({ genres, selectedGenre, setSelectedGenre, sortByRating, setSortByRating }) => {
  return (
    <div className="selector">
      <label htmlFor="genre">Select Genre: </label>
      <select id="genre" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="all">All</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortByRating} onChange={(e) => setSortByRating(e.target.value)}>
        <option value="rating">Rating</option>
        <option value="genre">Genre</option>
      </select>
    </div>
  );
};

export default Selector;
