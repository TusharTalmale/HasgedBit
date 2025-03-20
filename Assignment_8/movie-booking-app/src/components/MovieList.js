import React from "react";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Interstellar", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Avengers", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Titanic", image: "https://via.placeholder.com/150" },
  { id: 5, title: "Shutter Island", image: "https://via.placeholder.com/150" },
  { id: 6, title: "Joker", image: "https://via.placeholder.com/150" },
  { id: 7, title: "The Batman", image: "https://via.placeholder.com/150" },
  { id: 8, title: "Parasite", image: "https://via.placeholder.com/150" }
];

const MovieList = () => {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
