import React from 'react';

const MovieItem = ({ movie, onDelete }) => {
    const renderStars = (count) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span 
                key={i} 
                className={i < count ? "star-rating active" : "star-rating"} 
                aria-hidden="true"
            >
                &#9733;
            </span>
        ));
    };

    return (
        <li className="movie-list-item">
            {movie.name} {renderStars(movie.rating)}
            <button 
                className="delete-button" 
                onClick={onDelete} 
                aria-label={`Delete ${movie.name}`}
            >
                Delete
            </button>
        </li>
    );
};

export default MovieItem;
