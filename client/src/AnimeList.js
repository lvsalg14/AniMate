import React, { useState, useEffect } from 'react';

const AnimeList = ()=> {
    const [animeList, setAnimeList] = useState([]);
    useEffect(() => {
        const fetchAnimeList = async () => {
          const response = await fetch('https://api.myanimelist.net/v2');
          const data = await response.json();
          setAnimeList(data);
        };
    
        fetchAnimeList();
      }, []);
    
      return (
        <div>
          <h2>Anime List</h2>
          <ul>
            {animeList.map((anime) => (
              <li key={anime._id}>{anime.title}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default AnimeList;