import React from 'react';

const AverageRating = ({ averageRating }) => {
  return (
    <div className="average-rating">
      <h3>Average Rating: {averageRating}</h3>
    </div>
  );
};

export default AverageRating;
