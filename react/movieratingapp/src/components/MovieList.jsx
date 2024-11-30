import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, handleDeleteMovie }) => {
    return (
        <div className="movie-list">
            <ul>
                {movies.map((movie, index) => (
                    <MovieItem 
                        key={index} 
                        movie={movie} 
                        onDelete={() => handleDeleteMovie(index)} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
