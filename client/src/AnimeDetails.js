// AnimeDetails.js
import React, { useState, useEffect } from 'react';

const AnimeDetails = ({animeId, onGoBack}) => {
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    // Fetch anime details from your API endpoint
    fetch(`http://localhost:9000/api/anime/${animeId}`)
      .then(response => response.json())
      .then(data => setAnimeDetails(data))
      .catch(error => console.error('Error fetching anime details:', error));
  }, [animeId]); // Run whenever the ID parameter changes

  if (!animeDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Anime Details</h2>
      <img src={process.env.PUBLIC_URL + '/photos/' + animeDetails.photo} alt={animeDetails.title} style={{ width: '200px', height: '300px' }} />
      <h3>{animeDetails.title}</h3>
      <p>{animeDetails.synopsis}</p>
      <p>Genres: {animeDetails.genre}</p>
      <p>Release Date: {animeDetails.releaseDate}</p>
      <button onClick={onGoBack}>Go Back to Home</button>
    </div>
  );
};

export default AnimeDetails;
