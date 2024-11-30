import React, { useState } from 'react';

const MovieForm = ({ addMovies }) => {
  const options = [1, 2, 3, 4, 5];
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState(0);

  const handleMovie = () => {
    if (movieName && rating > 0) {
      addMovies({ name: movieName, rating: parseInt(rating) });
      setMovieName("");
      setRating(0);
    }
  };

  return (
    <div className="movie-form">
      <h1>Movie Rating App</h1>
      <input 
        type="text" 
        placeholder="Movie Name" 
        value={movieName} 
        onChange={(e) => setMovieName(e.target.value)} 
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="0">Select Stars</option>
        {options.map((num) => (
          <option key={num} value={num}>{num} Star</option>
        ))}
      </select>
      <button onClick={handleMovie}>ADD</button>
    </div>
  );
};

export default MovieForm;
