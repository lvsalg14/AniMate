// AnimeList.js
import React, { useState, useEffect } from 'react';

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    // Fetch anime list from your API endpoint
    fetch('http://localhost:9000/api/anime/list')
      .then(response => response.json())
      .then(data => setAnimeList(data))
      .catch(error => console.error('Error fetching anime list:', error));
  }, []); // Run once on component mount

  return (
    <div>
      <h2>Anime List</h2>
      <ul>
        {animeList.map(anime => (
          <li key={anime.id}>
            <img src={anime.photo} alt={anime.title} style={{ width: '100px', height: '150px' }} />
            <h3>{anime.title}</h3>
            <p>{anime.synopsis}</p>
            <p>Genres: {anime.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
